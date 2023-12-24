import { useHttpClient } from '@app/store/httpClient';
import type { PaginatedResult } from '@app/types';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useMemo } from 'react';

type IPaginatedQueryResponse<T> = AxiosResponse<PaginatedResult<T>>;
type IPaginatedQueryError<K> = AxiosError<K>;

export interface UsePaginatedQueryProps<K> {
  url: string;
  enabled?: boolean;
  onError?: (err: IPaginatedQueryError<K>) => void;
  initialPageParam?: number;
}

function usePaginatedQuery<T, K = unknown>(props: UsePaginatedQueryProps<K>) {
  const { enabled = true, initialPageParam = 1, url } = props;

  const { httpClient } = useHttpClient();

  const query = useInfiniteQuery<IPaginatedQueryResponse<T>, IPaginatedQueryError<K>>({
    queryKey: [url],
    enabled,
    retry: 3,
    getNextPageParam: (lastPage) => lastPage.data.meta.next,
    getPreviousPageParam: (lastPage) => lastPage.data.meta.prev,
    placeholderData: keepPreviousData,
    initialPageParam,
    queryFn: ({ pageParam = 0 }) => {
      return httpClient.get(url, { params: { paginate: { page: pageParam } } });
    },
  });

  const flattenData: T[] = useMemo(() => {
    return query.data?.pages.map((page) => page.data.data).flat() ?? [];
  }, [query.data]);

  const safeFetchNextPage = useCallback(() => {
    if (query.hasNextPage) void query.fetchNextPage();
  }, [query]);

  return { ...query, flattenData, safeFetchNextPage };
}

export { usePaginatedQuery };
