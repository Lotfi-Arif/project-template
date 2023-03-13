import { createContext, useContext } from 'react';

interface SidebarContext {
  collapsed: boolean;
  setCollapsed: () => void;
}

export const SidebarContext = createContext<SidebarContext>({
  collapsed: false,
  setCollapsed: () => {
    throw new Error('setCollapsed() not implemented');
  },
});

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
