import type { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { useHttpClient } from '@app/store/httpClient';

type IGetQueryResponse<T> = AxiosResponse<T>;
type IGetQueryError<K> = AxiosError<K>;

export interface UseGetQueryProps<T, K> {
  url: string;
  enabled?: boolean;
  onSuccess?: (data: IGetQueryResponse<T>) => void;
  onError?: (err: IGetQueryError<K>) => void;
}

function useGetQuery<T, K = unknown>(props: UseGetQueryProps<T, K>) {
  const { enabled = true, url, onError, onSuccess } = props;

  const { httpClient } = useHttpClient();

  const queryFunction = () => httpClient.get(url);

  const query = useQuery<IGetQueryResponse<T>, IGetQueryError<K>>(url, queryFunction, {
    enabled,
    onSuccess,
    onError,
    retry: 3,
  });

  return query;
}

export { useGetQuery };
