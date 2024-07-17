import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddCustomer() {
    const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
  return (
    <>
    <button className='btn btn-info' onClick={handleShow}>AddCustomer</button>
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
        <FloatingLabel controlId="floatingNAME"label="Customer Name"className="mb-3">
        <Form.Control type="email" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPhone" label="Phone Number">
        <Form.Control type="number" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="Kilom" label="Running Kilometers">
        <Form.Control type="number" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="vehicle" label="Vehicle Registration Number">
        <Form.Control type="text" placeholder="" />
      </FloatingLabel>
      <FloatingLabel controlId="vehicleimg" label="Vehicle Image">
        <Form.Control type="file" placeholder="" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddCustomer