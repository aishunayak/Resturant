import React from 'react';
import './Register.css'

const Register = () => {
   
  return (
    <div className='login'>
        <form className="loginform">
            <div className="loginname">
            <img id='logo'src='Aishkit.png' alt=' ' />
            <h2>Sign In</h2>
            </div>
            <div className="details">
                <input type='text' placeholder='Your Name' required/>
                <input type='text' placeholder='Address' required/>
                <input type='email' placeholder='E-mail' required/>
                <input type='mobile' placeholder='Mobile No' required/>
                <input type='passward' placeholder='Passward' required/>
                <input type='passward' placeholder=' Confirm Passward' required/>
            </div>
              <button id='submit'>Submit</button>
        </form>
      
    </div>

  );
}

export default Register;
