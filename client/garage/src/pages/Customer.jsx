import React, { useContext, useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Addcustomer from '../components/AddCustomer';
import { Link } from 'react-router-dom';
import { getCustomer } from '../ApiServices/allApi';
import { addCustomerResponseContext } from '../ContextApi/CustomerContext';

function Customer() {

  const {addCustomerResponse}=useContext(addCustomerResponseContext)
  const [customers,setCustomers]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const result=await getCustomer()
    setCustomers(result.data)
  }

  console.log(customers);

  return (
    <>
      <div className='container-fluid p-5'>
        <h2 className='mb-2'>Customers</h2>
        <Row>
          <Col sm={6} md={2}>
            <Addcustomer/>
          </Col>
          <Col sm={6} md={10}>
            <div className='row'>
              {
                  <Card style={{ width: '18rem' }} className='shadow border m-3'>
                  <Card.Img variant="top"  src={item.image?item.image:"https://imgd.aeplcdn.com/370x208/n/cw/ec/142523/alcazar-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80"} />
                  <Card.Body>
                    <Card.Title>
                      {item.vehicle_number}
                    </Card.Title>
                    <Card.Text>
                      <h5><b>Customer : {item.customer}</b></h5>
                      <p>Customer : {item.phone}</p>
                    </Card.Text>
                    <Link to={`/service/${item.id}`} className='btn btn-primary'>Services</Link>
                  </Card.Body>
                  </Card>
                }
                <h4 className='text-center text-danger'>No Customers Available!!</h4>

            

            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Customer