import { useHttpClient } from '@app/store/httpClient';
import { useQuery } from '@tanstack/react-query';
import type { AxiosError, AxiosResponse } from 'axios';

export type IListQueryResponse<T> = AxiosResponse<T>;
export type IListQueryError<K> = AxiosError<K>;

export interface UseListQueryProps {
  url: string;
  enabled?: boolean;
}

function useListQuery<T, K = unknown>(props: UseListQueryProps) {
  const { enabled = true, url } = props;

  const { httpClient } = useHttpClient();

  const queryFn = () => httpClient.get(url);

  const query = useQuery<IListQueryResponse<T>, IListQueryError<K>>({
    queryKey: [url],
    queryFn,
    enabled,
    retry: 3,
  });

  return query;
}

export { useListQuery };
