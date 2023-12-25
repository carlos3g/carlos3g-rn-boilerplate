import { EnvService } from '@app/services/Env.service';
import axios, { AxiosInstance } from 'axios';
import { createContext, useContext, useMemo } from 'react';
// import { useAuth } from '@app/store/auth';

const httpClient = axios.create({
  baseURL: EnvService.API_DNS,
});

interface IHttpClientContext {
  httpClient: AxiosInstance;
}

const HttpClientContext = createContext<IHttpClientContext>({
  httpClient,
});

const HttpClientProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // const { token } = useAuth();

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }

  //   httpClient.interceptors.request.use((config) => {
  //     if (!config.headers.Authorization) {
  //       config.headers.setAuthorization(`Bearer ${token}`);
  //     }

  //     return config;
  //   });
  // }, [token]);

  const values = useMemo(() => ({ httpClient }), []);

  return <HttpClientContext.Provider value={values}>{children}</HttpClientContext.Provider>;
};

const useHttpClient = () => {
  const context = useContext(HttpClientContext);

  return context;
};

export { HttpClientContext, HttpClientProvider, useHttpClient };
