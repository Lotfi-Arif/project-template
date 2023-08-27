'use client';
import React from 'react';
import '@/styles/globals.css';
import { useLockedBody } from '@/components/admin/hooks/useBodyLock';
import { NavbarWrapper } from '@/components/admin/navbar/navbar';
import { SidebarWrapper } from '@/components/admin/sidebar/sidebar';
import { SidebarContext } from '@/components/admin/layout/layout-context';
import { fontSans } from '@/config/fonts';
import clsx from 'clsx';
import { Providers } from './providers';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [_, setLocked] = useLockedBody(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setLocked(!sidebarOpen);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <SidebarContext.Provider
              value={{
                collapsed: sidebarOpen,
                setCollapsed: handleToggleSidebar,
              }}
            >
              <section className="flex">
                <SidebarWrapper />
                <NavbarWrapper>{children}</NavbarWrapper>
              </section>
            </SidebarContext.Provider>
          </div>
        </Providers>
      </body>
    </html>
  );
}
