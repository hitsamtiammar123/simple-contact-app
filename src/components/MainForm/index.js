import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_DATA } from '@contact-simple/store/constants';

export default function MainForm(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [imgUrl, setImgUrl] = useState('http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550');
  const dispatch = useDispatch();

  function onSubmit(){
    const d = {
      firstName,
      lastName,
      age,
      photo: imgUrl
    };
    dispatch({
      type: ADD_DATA,
      payload: d
    });
    setTimeout(() => {
      window.scrollTo(0,document.body.scrollHeight)
    }, 500)
  }

  return (
    <>
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
        <input onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} className="form-control" placeholder="Please Input Image URL"/>
      </div>
      <button onClick={onSubmit} className="btn btn-success">Submit</button>
    </>
  )
}