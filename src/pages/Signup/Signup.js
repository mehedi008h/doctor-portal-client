import React, { useState } from 'react';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField, Button } from '@mui/material';
import loginBg from '../../images/login.png';
import './Signup.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import swal from 'sweetalert';

const Signup = () => {
    const [loginData, setLoginData] = useState({});
    const { signInUsingGoogle, isLoading, registerUser } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            swal("Something Went Wrong!", "Your password did not match!", "danger");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mt-5 mb-5">
                        <div className="login-card">
                            <h3 className="text-center">Signup</h3>
                            {!isLoading &&
                                <form onSubmit={handleLoginSubmit} className="mt-4 d-flex flex-column">
                                    <TextField
                                        onBlur={handleOnBlur}
                                        name="name"
                                        sx={{ width: '100%', marginTop: 3 }}
                                        type="text"
                                        label="Your Name" variant="outlined" />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        name="email"
                                        sx={{ width: '100%', marginTop: 3 }}
                                        type="email"
                                        label="Your Email" variant="outlined" />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        name="password"
                                        sx={{ width: '100%', marginTop: 3 }}
                                        type="password"
                                        label="Your Password" variant="outlined" />
                                    <TextField
                                        onBlur={handleOnBlur}
                                        name="password2"
                                        sx={{ width: '100%', marginTop: 3 }}
                                        type="password"
                                        label="Re-type Password" variant="outlined" />
                                    <Button sx={{ width: '100%', marginTop: 3 }} type="submit" variant="contained">Sign in</Button>
                                </form>
                            }

                            <p className="text-center mt-3 fw-bold">Already Have An Account? <Link to="/login" style={{ textDecoration: 'none' }} className="">Login</Link></p>
                            <hr />
                            <div className="text-center">
                                <button onClick={handleGoogleSignIn} className="social"><FontAwesomeIcon className="social-icon" icon={faGoogle}></FontAwesomeIcon></button>
                                <button className="social ms-3"><FontAwesomeIcon className="social-icon" icon={faTwitter}></FontAwesomeIcon></button>
                                <button className="social ms-3"><FontAwesomeIcon className="social-icon" icon={faFacebook}></FontAwesomeIcon></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="w-75" src={loginBg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;