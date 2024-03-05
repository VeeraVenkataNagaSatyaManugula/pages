

import React from 'react';
import './regi.component.css';

const RegistrationForm = () => {
  return (
    <div className="registration-container ">
      <div className="registration-form">
        <h2>Registration Form</h2>
        <form>
          
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required ></input>
          
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" id="firstname" name="firstname" required ></input>

          <label htmlFor="lastname">Lastname:</label>
          <input type="text" id="lastname" name="lastname" required ></input>

          <label htmlFor="phonenumber">Phonenumber:</label>
          <input type="number" id="phone" name="phonenumber" required ></input>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required ></input>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required ></input>
          <div>
          <button type="submit">Submit</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;

























