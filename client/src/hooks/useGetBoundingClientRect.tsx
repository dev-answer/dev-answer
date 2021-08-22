import { RefObject, useEffect } from 'react';

const useGetBoundingClientRect = (
  ref: RefObject<HTMLElement>,
  // eslint-disable-next-line no-unused-vars
  callback: (rect: DOMRect) => void,
) => {
  useEffect(() => {
    const element = ref.current;

    if (!element) {
      callback({} as DOMRect);
      return;
    }

    const rect = element.getBoundingClientRect();
    callback(rect);
  }, []);
};

export default useGetBoundingClientRect;
