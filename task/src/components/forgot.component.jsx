

import React, { useState } from 'react';
import './forgot.component.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function ForgotForm(){

  const Navigate=useNavigate();

  const [email,setEmail] = useState();
  
  function saveData(){
    const data={
      email:email
      
    }
    axios({
      method:"Post",
      url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/forgot/password",  
      data:data
    }).then(()=>{
      alert("check your email");
    })
    Navigate('/resetpass')
  }
  return (
    <div className="forgot-container ">
      <div className="forgot-form">
        <h2>Forgot Page</h2>
        <form>
          
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required  onChange={e=>setEmail(e.target.value)}></input>

          <div>
          <button type="submit" onClick={()=>saveData()}>Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ForgotForm;

























