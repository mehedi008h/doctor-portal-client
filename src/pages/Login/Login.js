import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginBg from '../../images/login.png';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInUsingGoogle, loginUser } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mt-5 mb-5">
                        <div className="login-card">
                            <h3 className="text-center">Login</h3>
                            <form onSubmit={handleLoginSubmit} className="mt-4 d-flex flex-column">
                                <TextField
                                    onChange={handleOnChange}
                                    name="email"
                                    sx={{ width: '100%', marginTop: 3 }}
                                    type="email" label="Your Email"
                                    variant="outlined" />
                                <TextField
                                    onChange={handleOnChange}
                                    name="password"
                                    sx={{ width: '100%', marginTop: 3 }}
                                    type="password"
                                    label="Your Password"
                                    variant="outlined" />
                                <Button sx={{ width: '100%', marginTop: 3 }} type="submit" variant="contained">Sign in</Button>
                            </form>
                            <p className="text-center mt-3 fw-bold">Dont Have Account? <Link to="/signup" style={{ textDecoration: 'none' }} className="">Sign Up</Link></p>
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

export default Login;