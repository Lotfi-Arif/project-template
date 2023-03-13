import { Col, Row, User, Text, Tooltip } from '@nextui-org/react';
import React from 'react';
import { DeleteIcon } from '../icons/table/delete-icon';
import { EditIcon } from '../icons/table/edit-icon';
import { EyeIcon } from '../icons/table/eye-icon';
import { users } from './data';
import { IconButton, StyledBadge } from './table.styled';

type UserStatus = 'active' | 'paused' | 'vacation';

interface Props {
  user: (typeof users)[number];
  columnKey: string | React.Key;
}

const getStatusType = (status: string): UserStatus => {
  if (status === 'active') return 'active';
  if (status === 'paused') return 'paused';
  if (status === 'vacation') return 'vacation';
  return 'active'; // default value
};

export const RenderCell = ({ user, columnKey }: Props) => {
  const cellValue = user[columnKey as keyof typeof user];
  switch (columnKey) {
    case 'name':
      return (
        <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
          {user.email}
        </User>
      );
    case 'role':
      return (
        <Col>
          <Row>
            <Text b size={14} css={{ tt: 'capitalize' }}>
              {cellValue}
            </Text>
          </Row>
          <Row>
            <Text b size={13} css={{ tt: 'capitalize', color: '$accents7' }}>
              {user.team}
            </Text>
          </Row>
        </Col>
      );
    case 'status':
      return (
        <StyledBadge type={getStatusType(user.status)}>{cellValue}</StyledBadge>
      );

    case 'actions':
      return (
        <Row
          justify='center'
          align='center'
          css={{ gap: '$8', '@md': { gap: 0 } }}
        >
          <Col css={{ d: 'flex' }}>
            <Tooltip content='Details'>
              <IconButton onClick={() => console.log('View user', user.id)}>
                <EyeIcon size={20} fill='#979797' />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: 'flex' }}>
            <Tooltip content='Edit user'>
              <IconButton onClick={() => console.log('Edit user', user.id)}>
                <EditIcon size={20} fill='#979797' />
              </IconButton>
            </Tooltip>
          </Col>
          <Col css={{ d: 'flex' }}>
            <Tooltip
              content='Delete user'
              color='error'
              onClick={() => console.log('Delete user', user.id)}
            >
              <IconButton>
                <DeleteIcon size={20} fill='#FF0080' />
              </IconButton>
            </Tooltip>
          </Col>
        </Row>
      );
    default:
      return cellValue;
  }
};
