import { Button, Input, Text } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import {
  Breadcrumbs,
  Crumb,
  CrumbLink,
} from '@/components/admin/breadcrumb/breadcrumb.styled';
import { DotsIcon } from '@/components/admin/icons/accounts/dots-icon';
import { ExportIcon } from '@/components/admin/icons/accounts/export-icon';
import { InfoIcon } from '@/components/admin/icons/accounts/info-icon';
import { TrashIcon } from '@/components/admin/icons/accounts/trash-icon';
import { HouseIcon } from '@/components/admin/icons/breadcrumb/house-icon';
import { UsersIcon } from '@/components/admin/icons/breadcrumb/users-icon';
import { SettingsIcon } from '@/components/admin/icons/sidebar/settings-icon';
import { Flex } from '@/components/styles/flex';
import { TableWrapper } from '../table/table';
import { AddUser } from './add-user';

export const Accounts = () => {
  return (
    <Flex
      css={{
        mt: '$5',
        px: '$6',
        '@sm': {
          mt: '$10',
          px: '$16',
        },
      }}
      justify={'center'}
      direction={'column'}
    >
      <Breadcrumbs>
        <Crumb>
          <HouseIcon />
          <Link href={'/'}>
            <CrumbLink href='#'>Home</CrumbLink>
          </Link>
          <Text>/</Text>
        </Crumb>

        <Crumb>
          <UsersIcon />
          <CrumbLink href='#'>Users</CrumbLink>
          <Text>/</Text>
        </Crumb>
        <Crumb>
          <CrumbLink href='#'>List</CrumbLink>
        </Crumb>
      </Breadcrumbs>

      <Text h3>All Accounts</Text>
      <Flex
        css={{ gap: '$8' }}
        align={'center'}
        justify={'between'}
        wrap={'wrap'}
      >
        <Flex
          css={{
            gap: '$6',
            flexWrap: 'wrap',
            '@sm': { flexWrap: 'nowrap' },
          }}
          align={'center'}
        >
          <Input
            css={{ width: '100%', maxW: '410px' }}
            placeholder='Search users'
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </Flex>
        <Flex direction={'row'} css={{ gap: '$6' }} wrap={'wrap'}>
          <AddUser />
          <Button auto iconRight={<ExportIcon />}>
            Export to CSV
          </Button>
        </Flex>
      </Flex>

      <TableWrapper />
    </Flex>
  );
};
