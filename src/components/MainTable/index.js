import React, { useState } from 'react';
import { Table } from 'reactstrap';
import { EditModal } from '@contact-simple-components';
import './styles.css';

export default function MainTable(){
  const [showModal, setShowModal] = useState(false);

  return  (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>22</td>
            <td>
              <img className="photo" alt="" src="http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550" />
            </td>
            <td>
              <button className="btn btn-primary me-3" onClick={() => setShowModal(true)}>Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
      <EditModal 
        isShow={showModal}
        toggle={() => {
          setShowModal(!showModal)
        }}
      />
    </>
  )
}