import { Content } from '@/components/admin/home/content';
import React from 'react';
import { Layout } from '@/components/admin/layout/layout';
import { useSSR } from '@nextui-org/react';

export default function Admin() {
  const { isBrowser } = useSSR();
  return isBrowser ? (
    <Layout>
      <Content />
    </Layout>
  ) : null;
}
