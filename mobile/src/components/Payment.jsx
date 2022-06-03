import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { deletecart } from '../redux/actions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export const Payment = () => {
  
  const navigate = useNavigate()

  const [ formData , setFormData] = React.useState({
      name : "",
      cardNo : "",
      expiry :"",
      cvv : ""
  })


  const HandleChange = (e) => {

      const {id,value} = e.target;
      setFormData({...formData , [id] : value})
  }

  const HandleSubmit = () => {

      console.log(formData)
      if(formData.name === "" || formData.cardNo.length === 0  || formData.cvv.length == 0  ){
        alert("Please Fill all the Details!")
      }

      else if(formData.name !== "" && formData.cardNo.length === 16  && formData.cvv.length == 3  ){
          navigate("/Paymentdone")
      }
      else if(formData.cardNo.length != 16 && formData.name !== ""  && formData.cvv.length == 3){
           alert("Please check Card Number")
      }
      else if(formData.cvv.length == 3 && formData.name !== "" && formData.cardNo.length !== 0){
        alert("Please check CVV ")
   }
  }

return (
  <>
  <div className="paymentBox">
  <h1 id="mypay">YOUR CARD DETAILS</h1>
  <Box
    sx={{
      alignItems: 'center',
      '& > :not(style)': { m: 1 },
    }}
  >
    <TextField className="inputIs" onChange={HandleChange}
      id="name"
      label="Name"
      type="text"
      placeholder="Full Name" 
    /> 

   <TextField className="inputIs" onChange={HandleChange}
      id="cardNo"
      label="Card Number"
      type="number"
      placeholder="1234 5678 9123 4566"
    /> 

    <TextField className="inputIs" onChange={HandleChange}
      id="expiry"
      label="Expiry Date"

      placeholder="MM/YYYY"
    /> 

    <TextField className="inputIs" onChange={HandleChange}
      id="cvv"
      label="CVV/CVC"
      type="password"
      placeholder="***"
    /> 
  
   {/* ---------------------- Button --------------------------------------- */}


  <Stack direction="row" spacing={2}>
    <Button  onClick={HandleSubmit} id='paymentBtn' variant="contained">SUBMIT</Button>
  </Stack>

  </Box>
  </div>
  </>
);
}
