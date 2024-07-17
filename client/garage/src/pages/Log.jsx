import React, { useState } from 'react'




function Log() {
    const [userData,setUserData] = useState({username:"",password:""})

    const handleLogin=async()=>{
        console.log(userData)
        const {username,password}=userData
        if(!username || !password){
            toast.warning("Enter Valid Input")
        }else{
            const result=await getToken(user)
            if(result.status==20){
                console.log(result)
                sessionStorage.setItem("token",result.data.token)
                setUserData({username:"",password:""})
                toast.success("login Successfull")
                nav('/home')
            }
            else{
                
            }
        }
        
    }
  return (
    <>
    <div className='w-100 justify-content-center align-items-center d-flex' style={{height:'90vh'}}>
        <div className='w-50 bg-light p-5 border shadow'></div>
        <h2>mechanic Login</h2>
        <form action="">
            <input type="text"  name='' placeholder='Enter Username' id="" className='form-control my-3'/>
            <input type="password"  name='' placeholder='Enter Password' id="" className='form-control my-3'/>
            <div className='d-flex justify-content-between'>
               <button className='btn btn-success'>Login</button>
               <Link className='btn byn-warning' to={'./reg'}></Link>
            </div>
        </form>
    </div>
    </>
  )
}

export default Log