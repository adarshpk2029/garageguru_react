import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Addservice() {
  const [serviceData,setServiceData] = useState({
    title:"",notes:"",amount:""
  })
    const [show, setShow] = useState(false);

    const handleSubmit=async()=>{
      console.log(serviceData)
      const{title,notes,amount}=serviceData
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn btn-info' onClick={handleShow} style={{backgroundColor:'green'}}>Add Customer +</button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingName" label="Service Title" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPhone" label="Notes" className="mb-3">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="Kilom" label="Amount" className="mb-3">
        <Form.Control type="number" placeholder="" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
)
}

export default Addservice