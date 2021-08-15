import { useEffect } from 'react';

import { APP_DOMAIN, LOCALSTORAGE_ACCESS_TOKEN_KEY } from '../constants/domain';

const useSubscribeLoginPostMessage = () => {
  useEffect(() => {
    const handlePostMessage = (event: MessageEvent) => {
      if (event.origin !== APP_DOMAIN) {
        return;
      }

      const { accessToken } = event.data;

      if (accessToken) {
        localStorage.setItem(LOCALSTORAGE_ACCESS_TOKEN_KEY, accessToken);
      }

      // Todo: 추후 디자인 완료되면 여기서 추가적인 처리
    };

    window.addEventListener('message', handlePostMessage, false);
    return () => window.removeEventListener('message', handlePostMessage, false);
  }, []);
};

export default useSubscribeLoginPostMessage;
