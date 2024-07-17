import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import Addservice from '../components/Addservice'

function Service() {
  useEffect(()=> {
    getData()
  })
  return (
    <>
    <div className='container-fluid p-5'> 
    <div>Service</div>
    <Row>
      <Col sm={6} md={2}></Col>
       <Addservice/>
      <Col sm={6} md={10}></Col>
      <table className='table table-info table-bordered'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Notes</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Oil Change</td>
            <td>Use premium oil only</td>
            <td>500</td>
          </tr>
        </tbody>
      </table>
    </Row>
    <div className='my-5 p-3'> 
    <h3>Total service charge : <span className='text-success'>500</span></h3>
    </div>
    </div>
    </>
   
  )
}

export default Service