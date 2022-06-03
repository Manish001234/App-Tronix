import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import {useState} from "react";
import axios from 'axios';
import { signupRequest } from '../redux/actions';


const SignUp = () => {
  const navigate = useNavigate();
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  });
  const [state,setState] = useState(false);

  function handleChange(e){
    setState(false)
    const {name} = e.target;
    setData({
      ...data,
      [name]:e.target.value
    })
  }

  function handleSubmit(){
    if(data.name && data.email && data.password){
      axios.post("https://backend1242.herokuapp.com/auth/Signup",data).then(() => {
        alert("Successfully Registered")
        navigate("/Login")
      })
    }
    else{
      setState(true)
    }
  }

  return (
    <div style={{margin:"auto",textAlign:"center"}}>
      <br />
      <h1>SignUp</h1>
      <TextField name="name" onChange={handleChange} style={{width:"30%",margin:"25px 0"}} id="demo-helper-text-misaligned-no-helper" label="Name" placeholder='Enter Full Name' />
      <br />
      <TextField name="email" type="email" onChange={handleChange} style={{width:"30%",marginBottom:"25px"}} id="demo-helper-text-misaligned-no-helper" label="Email" placeholder='Enter Email' />
      <br />
      <TextField name="password" onChange={handleChange} type="password"  style={{width:"30%"}} id="demo-helper-text-misaligned-no-helper" label="Password" placeholder='Enter Password' />
      <br />
      <br />
      {state ? <p style={{color:"red"}}>please fill all the details</p> : null}
      <br />
      <Button onClick={handleSubmit} style={{width:"30%",height:"50px"}} variant="contained">Sign Up</Button>
      <br />
      <Link to="/Login">Already have an Account</Link>
    </div>
  )
}
export default SignUp;