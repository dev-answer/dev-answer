import React, {
  createContext, useContext, useMemo, useState,
} from 'react';
import { LOCALSTORAGE_ACCESS_TOKEN_KEY } from '../constants/domain';

interface AuthStoreContextProps {
  accessToken: string
  handleSetToken: (accessToken: string) => void
  handleResetToken: () => void
}

const AuthStoreContext = createContext<AuthStoreContextProps>({} as any);

const AuthStoreProvider: React.FC = ({ children }) => {
  const localStorageAccessToken = localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN_KEY) ?? '';
  const [accessTokenState, setAccessTokenState] = useState<string>(localStorageAccessToken);

  const handleSetToken = (accessToken: string) => {
    setAccessTokenState(accessToken);
    localStorage.setItem(LOCALSTORAGE_ACCESS_TOKEN_KEY, accessToken);
  };
  const handleResetToken = () => {
    setAccessTokenState('');
    localStorage.removeItem(LOCALSTORAGE_ACCESS_TOKEN_KEY);
  };

  const providerValue = useMemo(() => ({
    accessToken: accessTokenState,
    handleSetToken,
    handleResetToken,
  }), [accessTokenState, handleSetToken, handleResetToken]);

  return (
    <AuthStoreContext.Provider value={providerValue}>
      {children}
    </AuthStoreContext.Provider>
  );
};

export const useGetAuthStore = () => useContext(AuthStoreContext);

export default AuthStoreProvider;
