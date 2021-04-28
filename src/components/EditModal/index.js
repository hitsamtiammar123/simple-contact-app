import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function EditModal({
  isShow,
  toggle
}){
  function onToogle(){
    typeof toggle === 'function' && toggle();
  }
  return (
    <Modal isOpen={isShow}>
        <ModalHeader>Edit Modal</ModalHeader>
        <ModalBody>
          <div className="mb-3">
            <label class="form-label">First Name</label>
            <input class="form-control" placeholder="Please Input First Name"/>
          </div>
          <div className="mb-3">
            <label class="form-label">Last Name</label>
            <input class="form-control" placeholder="Please Input Last Name"/>
          </div>
          <div className="mb-3">
            <label class="form-label">Age</label>
            <input class="form-control" type="number" min="0" placeholder="Please Input Age"/>
          </div>
          <div className="mb-3">
            <label class="form-label">Image URL (Please input the right format)</label>
            <input class="form-control" placeholder="Please Input Image URL"/>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onToogle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={onToogle}>Cancel</Button>
        </ModalFooter>
    </Modal>
  )
}