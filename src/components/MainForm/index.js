import React from 'react';

export default function MainForm({
  showButton
}){
  return (
    <>
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
      {showButton === true && <button className="btn btn-success">Submit</button>}
    </>
  )
}