import React,{useState }from 'react';
import './resetpass.component.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function ResetpasswordForm() {

  const Navigate=useNavigate();

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [cpassword,setCpassword] = useState();


  function saveData(){
    const data={
      email:email,
      password:password,
      cpassword:cpassword
    }
    axios({
      method:"Post",
      url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/reset/password",
      data:data
    }).then(()=>{
      alert("successfully changed your password");
    })
    Navigate('/login')
  }
 
  return (
    <div className="resetpass-container ">
      <div className="resetpass-form">
        <h2>Resetpassword Page</h2>
        <form>
          
          
          <label htmlFor="otp">Otp:</label>
          <input type="number" id="otp" name="otp" required  onChange={e=>setEmail(e.target.value)}></input>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required  onChange={e=>setPassword(e.target.value)}></input>
          
          <label htmlFor="cpassword">conformPassword:</label>
          <input type="password" id="cpassword" name="cpassword" required  onChange={e=>setCpassword(e.target.value)} ></input>
          <div>
          <button type="submit" onClick={()=>saveData()}>Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ResetpasswordForm;

























