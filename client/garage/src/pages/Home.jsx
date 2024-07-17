import React, { useEffect,useState } from 'react'
import { getCustomer } from '../ApiServices/allApi'

function Home() {

    const [customerData,setCustomerData]=useState([])
    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{

        const result=await getCustomer()
        const customers = result.data
        console.log(customers)

        const current_date = new Date()
        const date = current_date.getUTCDate()
        const month = current_date.getUTCMonth()+1
        const year = current_date.getUTCFullYear()
        const Pmonth = month.toString().padStart(2,"0")
        const pDay = date.toString().padStart(2,"0")
        const cdate = `${year}-${Pmonth}-${pDay}`
        
        const res= customers?.filter(item => item.added_date == cdate)
        console.log(res)
        setCustomerData(res)
    }
    const logout=()=>{
        nav('/')
        sessionStorage.removeItem('token')
    }
  return (
    <>
    <div className='p-5'>
        <h2 className='text-center text-warning'>Today's Chart</h2>
        <table className='table table-dark table-bordered shadow mt-5'>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Phone Number</th>
                    <th>Vehicle Number</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    customerData.length > 0 ?
                    customerData.map(item =>(
                        <tr>
                            <td>{item.customer}</td>
                            <td>{item.phone}</td>
                            <td>{item.vehicle_number}</td>
                            <td>{item.status}</td>
                            <td>
                                <Link className='btn btn-primary' to={'/service'}>
                                    Services
                                </Link>
                            </td>
                        </tr>
                    ))

                    :
                    <h3 className='text-danger text-center'>No Customers Available!!</h3>

                }
            </tbody>

             
        </table>
        </div>
    </>
  )
}

export default Home