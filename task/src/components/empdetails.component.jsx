import axios from "axios";
import { useEffect, useState } from "react";
import './empdetails.component.css';

export function EmployeeData(){

    const [emp, setData]=useState([])

    const headers=["Emp ID","First Name"," Last Name","Email ID","Phone","Designation","Primary Skills"]
   
    function apiData(){
        let token = JSON.parse(localStorage.getItem("userinfo")).token;
        axios({
            method:"get",
            url:"http://ec2-3-109-214-63.ap-south-1.compute.amazonaws.com:4000/api/v1/emp/getEmployeeDetails",
            headers:{
                'Authorization': 'Bearer ' + token
       
              }
        }).then((response)=>{
            setData(response.data)
        })
    }
    useEffect(()=>{
        apiData();
    },[])
    return(
        <div className="table-container">
            <div className="table-form">
            <table>
                    <thead >
                    <tr>
                        {
                            headers.map((item)=>{
                            return(
                                <th>
                                {item}
                            </th>
                            )})
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map((item)=>{
                        return(
                            <tr>
                            <td>{item.empId}</td>
                            <td>{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.designation}</td>
                            <td>{item.primaryskill}</td>
                            </tr>
                        )
                        })
                    }
                </tbody>
            </table>
        </div>
        </div>
    
    )
}