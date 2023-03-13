import React from 'react';
import { useLockedBody } from '@/components/admin/hooks/useBodyLock';
import { NavbarWrapper } from '@/components/admin/navbar/navbar';
import { SidebarWrapper } from '@/components/admin/sidebar/sidebar';
import { SidebarContext } from './layout-context';
import { WrapperLayout } from './layout.styles';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  console.log('sidebarOpen', sidebarOpen, _);

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <WrapperLayout>
        <SidebarWrapper />
        <NavbarWrapper>{children}</NavbarWrapper>
      </WrapperLayout>
    </SidebarContext.Provider>
  );
};
