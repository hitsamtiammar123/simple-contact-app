import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'reactstrap';
import { EditModal } from '@contact-simple-components';
import _ from 'lodash';
import { SET_DATA } from '@contact-simple/store/constants';
import './styles.css';

export default function MainTable(){
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelectedData] = useState({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [photo, setPhoto] = useState('');

  const listData = useSelector(state => state.listData);
  const dispatch = useDispatch();

  function onModalClick(d){
    setSelectedData(_.cloneDeep(d));
    setFirstName(d.firstName);
    setLastName(d.lastName);
    setAge(Number(d.age));
    setPhoto(d.photo);
    setShowModal(true);
  }

  function onDelete(d){
    const newData = listData.filter(c => c.id !== d.id);
    dispatch({
      type: SET_DATA,
      payload: newData,
    })
  }

  function onToogle(){
    setShowModal(!showModal);
  }

  function onSubmit(){
    const d = {
      ...selected,
      firstName: firstName ,
      lastName: lastName ,
      age: age ,
      photo: photo 
    };
    const newData = listData.map(c => c.id === d.id ? d : c);
    dispatch({
      type: SET_DATA,
      payload: newData
    });
    onToogle();
  }

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
          {listData.map((d, index) => (
            <tr key={d.id}>
              <th scope="row">{index + 1}</th>
              <td>{d.firstName}</td>
              <td>{d.lastName}</td>
              <td>{d.age}</td>
              <td>
                <img className="photo" alt="" src={d.photo} />
              </td>
              <td>
                <button className="btn btn-primary me-3" onClick={() => onModalClick(d)}>Edit</button>
                <button className="btn btn-danger" onClick={() => onDelete(d)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <EditModal
        isShow={showModal}
        data={selected}
        toggle={() => {
          setShowModal(!showModal)
        }}
        onSubmit={onSubmit}
        onToogle={onToogle}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className="form-control" placeholder="Please Input First Name"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} className="form-control" placeholder="Please Input Last Name"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input onChange={(e) => setAge(Number(e.target.value))} value={age} className="form-control" type="number" min="0" placeholder="Please Input Age"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL (Please input the right format)</label>
            <input onChange={(e) => setPhoto(e.target.value)} value={photo} className="form-control" placeholder="Please Input Image URL"/>
          </div>
        </EditModal>
    </>
  )
}