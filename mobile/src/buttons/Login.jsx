import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import {useState} from "react";
import axios from 'axios';
import { loginRequest } from '../redux/actions';
import { useDispatch } from 'react-redux';


const Login = ({setLog}) => {
  const navigate = useNavigate();
  const [state,setState] = useState(false);
  const [hidden,setHidden] = useState("");
  const [data,setData] = useState({
    email:"",
    password:""
  });

  function handleChange(e){
    setState(false)
    const {name} = e.target;
    setData({
      ...data,
      [name]:e.target.value
    })
  }

  function handleSubmit(){
    if(data.email && data.password){
      axios.post("https://backend1242.herokuapp.com/auth/Login",data).then(({data}) => {
        setState(true);
        setHidden(data)
        localStorage.setItem("app", JSON.stringify(data));
        setLog(true)
        alert("Successfully Loged-In")
        navigate("/mobiles")
      })
    }
    else{
      setHidden("please fill all the details")
      setState(true)
    }
  }

  return (
    <div style={{margin:"auto",textAlign:"center"}}>
      <br />
      <h1>Login</h1>
      <TextField name="email" onChange={handleChange} style={{width:"30%",margin:"25px 0"}} id="demo-helper-text-misaligned-no-helper" label="Email" placeholder='Enter Email' />
      <br />
      <TextField name="password" onChange={handleChange} type="password"  style={{width:"30%"}} id="demo-helper-text-misaligned-no-helper" label="Password" placeholder='Enter Password' />
      <br />
      {state ? <p style={{color:"red"}}>{hidden}</p> : null}
      <br />
      <Button onClick={handleSubmit} style={{width:"30%",height:"50px"}} variant="contained">LOGIN</Button>
      <br />
      <Link to="/Signup">Create an Account</Link>
     
    </div>
  )
}

export default Login;