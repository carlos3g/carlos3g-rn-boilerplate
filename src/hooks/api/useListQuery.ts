import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useHttpClient } from '@app/store/httpClient';

export type IListQueryResponse<T> = AxiosResponse<T>;
export type IListQueryError<K> = AxiosError<K>;

export interface UseListQueryProps<T, K> {
  url: string;
  enabled?: boolean;
  onSuccess?: (data: IListQueryResponse<T>) => void;
  onError?: (err: IListQueryError<K>) => void;
}

function useListQuery<T, K = unknown>(props: UseListQueryProps<T, K>) {
  const { enabled = true, url, onError, onSuccess } = props;

  const { httpClient } = useHttpClient();

  const queryFunction = () => httpClient.get(url);

  const query = useQuery<IListQueryResponse<T>, IListQueryError<K>>(url, queryFunction, {
    enabled,
    onSuccess,
    onError,
    retry: 3,
  });

  return query;
}

export { useListQuery };
