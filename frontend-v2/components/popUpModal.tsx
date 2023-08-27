import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';

type PlacementType =
  | 'auto'
  | 'center'
  | 'top'
  | 'bottom'
  | 'top-center'
  | 'bottom-center';

// Reusable CustomModal Component
export const CustomModal = ({
  isOpen,
  onClose,
  placement,
  title,
  onSubmit,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  placement: PlacementType;
  title: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}) => (
  <Modal isOpen={isOpen} placement={placement} onClose={onClose}>
    <ModalContent>
      <form onSubmit={onSubmit}>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Close
          </Button>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </ModalFooter>
      </form>
    </ModalContent>
  </Modal>
);
