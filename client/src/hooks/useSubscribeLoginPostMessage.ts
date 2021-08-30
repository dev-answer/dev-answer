import { useEffect } from 'react';
import { useGetAuthStore } from '../contexts/AuthStore';

import { APP_DOMAIN } from '../constants/domain';

const useSubscribeLoginPostMessage = () => {
  const { handleSetToken } = useGetAuthStore();

  useEffect(() => {
    const handlePostMessage = (event: MessageEvent) => {
      if (event.origin !== APP_DOMAIN) {
        return;
      }

      const { accessToken } = event.data;

      if (accessToken) {
        handleSetToken(accessToken);
      }

      // Todo: 추후 디자인 완료되면 여기서 추가적인 처리
    };

    window.addEventListener('message', handlePostMessage, false);
    return () => window.removeEventListener('message', handlePostMessage, false);
  }, []);
};

export default useSubscribeLoginPostMessage;
