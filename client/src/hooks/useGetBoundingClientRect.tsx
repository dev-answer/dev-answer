import { RefObject, useEffect } from 'react';

const useGetBoundingClientRect = (
  ref: RefObject<HTMLElement>,
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
