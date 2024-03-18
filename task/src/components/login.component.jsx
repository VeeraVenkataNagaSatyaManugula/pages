import React ,{ useState } from 'react';
import './login.component.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

export function LoginForm(){
  
  const Navigate = useNavigate();

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();



  function saveData(){
    const data={
      email:email,  
      password:password
    }
    axios({
      method:"Post",
      url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/user/login",
      data:data,
    }).then((res)=>{
      if(res.status==200){
        
      alert("login successfully")
      localStorage.setItem("userinfo",JSON.stringify(res.data));
      }else{
        alert("login failed")
      }
    })
    Navigate('/employee')
  }
  return (
    <div className="login-container ">
      <div className="login-form">
        <h2>Login Page</h2>
        <div>
          
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required  onChange={e=>setEmail(e.target.value)} ></input>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required  onChange={e=>setPassword(e.target.value)}></input>
          <div>
          <button type="submit" onClick={()=>saveData()}>Submit</button>
          </div>
          <div>
            <Link to="/forgot" >Forgot password</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;












// token
// : 
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdHlhc3dhbXkyM0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NjciLCJpYXQiOjE3MTAxNTI3MjMsImV4cCI6MTcxMDIzOTEyM30.z5RflMnw_ugXHnADtMCiWUk9U39w9BfiOz8PGKglRVk"












