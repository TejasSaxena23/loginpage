import React from 'react'
import {useState , useRef} from 'react'
import { useDispatch} from 'react-redux'
import './Login.css'
import Login from "../features/Userslice"

function Loginpage() {
  const[email,setemail] = useState('');
  const[password,setpassword] = useState('');
  const[confirm,setconfirm] = useState('');
  const[active,setactive] = useState(false);
  const[name,setname] = useState('');
  const[phone,setphone] = useState('');
  
  const dispatch = useDispatch();

  const handlesubmit = (e)=>{
    e.preventDefault();
    
    dispatch({
      type:"USER",
     payload: Login({
           name:name,
           email:email,
           phone:phone,
           password:password,
           confirm:confirm,
      }) 
    })
};
const data = useRef();
const handleclick = ()=>{
  console.log(data.current.value)
  localStorage.setItem(data.current.value,"initialvalue")
}
 
  return (
    <>
    <div className='container' > 
        <form  ref={data} onSubmit={(e) => handlesubmit(e)} className='form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            { active? <h5 className=' label  leading-tight text-5xl mt-0 mb-2 text-gray-600 underline'>Register Here!</h5>:
               <h5 className='label leading-tight text-5xl mt-0 mb-2 text-gray-600 underline'>Login Here!</h5>
            }
             <button onClick={()=>setactive(false)} class=" btn1 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Login
            </button><button onClick={()=>setactive(true)} class=" btn2 text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Register
              </button>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                 Name
               </label>
               <input  className='input1 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type="text" value={name} onChange={(e)=> setname(e.target.value)} placeholder='Enter Your name' ></input>
               {
                active? <><label class="block text-gray-700 text-sm font-bold mb-2" for="username">Phone</label> <input className='input1 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type="number" value={phone} onChange={(e)=> setphone(e.target.value)} placeholder='Enter Your Phone' ></input></>:null
               }
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                 Email
               </label>
            <input className='input1 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type="email" value={email} onChange={(e)=> setemail(e.target.value)} placeholder='Enter Your email' ></input>
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
            </label>
            <input className='input2 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder='Enter Your password'></input>
            {
              active? <input className='input3 shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' type="password" value={confirm} onChange={(e)=> setconfirm(e.target.value)} placeholder='Confirm Your password'></input>:null}
             
             <button  onClick={handleclick} className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">Login</button>
        </form>
        </div>
    </>
  )
}

export default Loginpage
