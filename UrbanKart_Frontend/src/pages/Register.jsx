import React from 'react'
import { Footer } from "../components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import User from '../models/user';
import {  useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import authenticationService from '../services/authentication.service';
import {toast} from 'react-toastify';
const Register = () => {
    const [user,setUser]=useState(new User('','','','','','',''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();

//     const [selectedOption, setSelectedOption] = useState("");

//   function handleSelectChange(event) {
//     setSelectedOption(event.target.value);
//   }

  const handleChange=(event)=>{
    const {name, value} = event.target;
    setUser((prevState => {
        return {
            ...prevState,
            [name]: value
        };
    }));
  }

  const handleRegister = (e) => {

    e.preventDefault();
    // authenticationService.register(user).then(()=>alert("User Added"))


  setSubmitted(true);
  console.log(user);

  if (!user.firstName || !user.lastName || !user.password || !user.email || !user.role) {
      return;
  }

  setLoading(true);
  
  authenticationService.register(user).then(_ => {
    toast.success("User Registered Successfully" ,{autoClose: 1500});
      navigate('/login');
  }).catch(error => {
    toast.success(`${error.response.data}` ,{autoClose: 1500});
     console.log(error.response.data);
     if (error?.response?.status === 409) {
         setErrorMessage('Email already exists!!!');
     } else {
         setErrorMessage(error.errorMessage);
     }
     setLoading(false);
  });
};

    return (
        <>
           
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon"/>

                        {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                        }
                        <form onSubmit={(e) => handleRegister(e)}>
                            <div class="form my-3">
                                <label for="FName">First Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="FName"
                                    name="firstName"
                                    value={user.firstName}
                                    placeholder="Enter First Name"
                                    minLength={4}
                                    maxLength={20}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="FName">Last Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="LName"
                                    name="lastName"
                                    value={user.lastName}
                                    placeholder="Enter Last Name"
                                    minLength={4}
                                    maxLength={20}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    name="email"
                                    value={user.email}
                                    placeholder="name@example.com"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"//Copy From Backend
                                    name="password"
                                    value={user.password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div class="form  my-3">
                                <label for="Role">Role</label>
                                <select
                                    class="form-control"
                                    id="Role"
                                    name="role"
                                   value={user.role}
                                   onChange={handleChange}
                                    required>
                                        <option value="">-- select an option --</option>
                                        <option value="CUSTOMER">CUSTOMER</option>
                                        <option value="ADMIN">ADMIN</option>
                                </select>
                            </div>

                            <div class="form  my-3">
                                <label for="Mobile Number">Mobile Number</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="mobile"
                                    name="mobileNumber"
                                    minLength={10}
                                    maxLength={10}
                                    value={user.mobileNumber}
                                    placeholder="Mobile Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register