import type { AxiosError, AxiosResponse } from 'axios';
import { useInfiniteQuery } from 'react-query';
import { useHttpClient } from '@app/store/httpClient';
import type { PaginatedResult } from '@app/types';
import { useCallback, useMemo } from 'react';

type IPaginatedQueryResponse<T> = AxiosResponse<PaginatedResult<T>>;
type IPaginatedQueryError<K> = AxiosError<K>;

interface RQPaginatedRequestProps {
  pageParam?: number;
  queryKey: readonly unknown[];
}

export interface UsePaginatedQueryProps<K> {
  url: string;
  enabled?: boolean;
  onError?: (err: IPaginatedQueryError<K>) => void;
}

function usePaginatedQuery<T, K = unknown>(props: UsePaginatedQueryProps<K>) {
  const { enabled = true, url, onError } = props;

  const { httpClient } = useHttpClient();

  const queryFunction = ({ pageParam = 0 }: RQPaginatedRequestProps) => {
    return httpClient.get(url, { params: { paginate: { page: pageParam } } });
  };

  const query = useInfiniteQuery<IPaginatedQueryResponse<T>, IPaginatedQueryError<K>>(url, queryFunction, {
    enabled,
    onError,
    retry: 3,
    getNextPageParam: (lastPage) => lastPage.data.meta.next,
    getPreviousPageParam: (lastPage) => lastPage.data.meta.prev,
    keepPreviousData: true,
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
