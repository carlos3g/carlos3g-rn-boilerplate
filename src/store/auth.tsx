// import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
// import { useGetQuery } from '@app/shared/hooks';
// import { EnvService } from '@app/services/Env.service';
// import { StorageService } from '@app/services/Storage.service';
// import type { User } from '@app/types';

// interface IAuthContext {
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   user?: User;
//   token?: string | null;
//   setToken: React.Dispatch<React.SetStateAction<string | null | undefined>>;
//   logout: () => void;
//   refetchUseMe: () => void;
// }

// const AuthContext = createContext<IAuthContext>({
//   isAuthenticated: false,
//   isLoading: true,
//   user: undefined,
//   setToken: () => undefined,
//   token: undefined,
//   logout: () => undefined,
//   refetchUseMe: () => undefined,
// });

// const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
//   const [user, setUser] = useState<User | undefined>();
//   const [token, setToken] = useState<string | null | undefined>();
//   const [isLoading, setIsLoading] = useState(true);

//   const { refetch: refetchUseMe } = useGetQuery<User>({
//     url: 'auth/me',
//     enabled: !!token,
//     onSuccess: (data) => {
//       setIsLoading(false);
//       setUser(data.data);
//     },
//     onError: () => {
//       void logout();
//       setIsLoading(false);
//     },
//   });

//   useEffect(() => {
//     const fetchToken = async () => {
//       const storagedToken = await StorageService.getItem(EnvService.RN_AUTH_TOKEN_KEY);

//       setIsLoading(!!storagedToken);
//       setToken(storagedToken);
//     };

//     void fetchToken();
//   }, []);

//   const logout = useCallback(() => {
//     void clearTokenState();
//     setUser(undefined);
//   }, []);

//   const values = useMemo(
//     () => ({ isAuthenticated: !!user, token, user, setToken, isLoading, logout, refetchUseMe }),
//     [token, user, isLoading, logout, refetchUseMe]
//   );

//   const clearTokenState = async () => {
//     setToken(null);
//     await StorageService.removeItem(EnvService.RN_AUTH_TOKEN_KEY);
//   };

//   return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
// };

// const useAuth = () => {
//   const context = useContext(AuthContext);

//   return context;
// };

// export { AuthContext, AuthProvider, useAuth };
