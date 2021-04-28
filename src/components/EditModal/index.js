import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DATA } from '@contact-simple/store/constants';

export default function EditModal({
  isShow,
  toggle,
  data,
  children,
  onSubmit,
  onToogle
}){
  const dispatch = useDispatch();
  const listData = useSelector(state => state.listData);



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