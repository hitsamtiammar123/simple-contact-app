import React, { useEffect } from 'react';
import './styles.css';
import { MainTable, MainForm } from '@contact-simple-components'

export default function Main(){

  return (
    <>
      <div className="main-header bg-light d-flex align-items-center justify-content-center">
        <h4 className="title">Simple Contact App</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 mt-4">
            <MainForm showButton/>
        </div>
        <div className="row mt-5">
          <MainTable />
        </div>
      </div>
    </div>
    </>
  )
}