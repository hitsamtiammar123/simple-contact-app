import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function EditModal({
  isShow,
  toggle,
  data,
  children,
  onSubmit,
  onToogle
}){

  return (
    <Modal isOpen={isShow}>
        <ModalHeader>Edit Modal</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSubmit}>Submit</Button>{' '}
          <Button color="secondary" onClick={onToogle}>Cancel</Button>
        </ModalFooter>
    </Modal>
  )
}