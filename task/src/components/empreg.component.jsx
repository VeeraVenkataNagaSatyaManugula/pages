import React, { useState } from 'react';
import './empreg.component.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function EmployeeRegi(){

  const Navigate = useNavigate();

  const [empid,setEmpid] = useState('');  
  const [firstname,setFirstname] = useState('');
  const [lastname,setLastname] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [designation,setDesignation] = useState('');
  const [primaryskill,setPrimaryskill] = useState('');

  
  function saveData(){
    const data={
      empId:empid,
      firstname:firstname,
      lastname:lastname,
      email:email,
      phone:phone,
      designation:designation,
      primaryskill:primaryskill,
    }
    let token = JSON.parse(localStorage.getItem("userinfo")).token;
    axios({
      method:"Post",
      url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/emp/addEmpDetails",
      data:data,
      headers:{
        'Authorization': 'Bearer ' + token
      }
    }).then(()=>{
      alert("employee data saved successfully");
    })
    Navigate('/empdetails');
  }
  return (
    <div className="emp-container ">
      <div className="emp-form">
        <h2>Employee Datails</h2>
        <div>

          <label htmlFor="empid">Empid:</label>
          <input type="number" id="empid" name="empid" required  onChange={e=>setEmpid(e.target.value)}></input>

          <label htmlFor="firstname">Firstname:</label>
          <input type="text" id="firstname" name="firstname" required  onChange={e=>setFirstname(e.target.value)}></input>

          <label htmlFor="lastname">Lastname:</label>
          <input type="text" id="lastname" name="lastname" required  onChange={e=>setLastname(e.target.value)}></input>

          <label htmlFor="phonenumber">Phonenumber:</label>
          <input type="number" id="phone" name="phonenumber" required onChange={e=>setPhone(e.target.value)}></input>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required  onChange={e=>setEmail(e.target.value)}></input>

          <label htmlFor="designation">Designation:</label>
          <input type="text" id="designation" name="designation" required  onChange={e=>setDesignation(e.target.value)}></input>

          <label htmlFor="primaryskill">Primary skills:</label>
          <input type="text" id="primaryskill" name="primaryskill" required onChange={e=>setPrimaryskill(e.target.value)} ></input>
          <div>
          <button type="button"  onClick={()=>saveData()}>Submit</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmployeeRegi;

























