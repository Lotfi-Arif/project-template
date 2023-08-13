import { useState } from 'react';
import { Button, Divider, Input, Modal } from '@nextui-org/react';

export const AddUser = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  return (
    <>
      <Button onClick={handler}>Add User</Button>
    </>
  );
};
