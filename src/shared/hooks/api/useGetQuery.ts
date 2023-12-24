import type { AxiosError, AxiosResponse } from 'axios';
import { useHttpClient } from '@app/store/httpClient';
import { useQuery } from '@tanstack/react-query';

type IGetQueryResponse<T> = AxiosResponse<T>;
type IGetQueryError<K> = AxiosError<K>;

export interface UseGetQueryProps {
  url: string;
  enabled?: boolean;
}

function useGetQuery<T, K = unknown>(props: UseGetQueryProps) {
  const { enabled = true, url } = props;

  const { httpClient } = useHttpClient();

  const queryFn = () => httpClient.get(url);

  const query = useQuery<IGetQueryResponse<T>, IGetQueryError<K>>({
    queryKey: [url],
    queryFn,
    enabled,
    retry: 3,
  });

  return query;
}

export { useGetQuery };
