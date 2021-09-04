import React, { createContext, useContext } from 'react';

const RootElementContext = createContext<Element>({} as any);

interface Props {
  rootElement: Element | null
}

const RootElementProvider: React.FC<Props> = ({ children, rootElement }) => (
  <RootElementContext.Provider value={rootElement!}>
    {children}
  </RootElementContext.Provider>
);

export const useGetRootElement = () => useContext(RootElementContext);

export default RootElementProvider;
