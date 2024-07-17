import React from 'react'

function Reg() {
  return (
    <>
    <div className='w-100 justify-content-center align-items-center d-flex' style={{height:'90vh'}}>
        <div className='w-50 bg-light p-5 border shadow'></div>
        <h2>mechanic Login</h2>
        <form action="">
            <input type="text"  name='' placeholder='Enter Email ID' id="" className='form-control my-3'/>  
            <input type="text"  name='' placeholder='Enter Username' id="" className='form-control my-3'/>
            <input type="password"  name='' placeholder='Enter Password' id="" className='form-control my-3'/>
            <div className='d-flex justify-content-between'>
               <button className='btn btn-success'>Register</button>
               <Link className='btn byn-warning' to={'./reg'}>Already a user Sign in </Link>
            </div>
        </form>
    </div>
    </>
  )
}

export default Reg