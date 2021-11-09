import React from 'react';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextField, Button } from '@mui/material';
import loginBg from '../../images/login.png';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mt-5 mb-5">
                        <div className="login-card">
                            <h3 className="text-center">Login</h3>
                            <form className="mt-4 d-flex flex-column">
                                <TextField sx={{ width: '100%', marginTop: 3 }} type="email" id="outlined-basic" label="Your Email" variant="outlined" />
                                <TextField sx={{ width: '100%', marginTop: 3 }} type="password" id="outlined-basic" label="Your Password" variant="outlined" />
                                <Button sx={{ width: '100%', marginTop: 3 }} variant="contained">Sign in</Button>
                            </form>
                            <p className="text-center mt-3 fw-bold">Dont Have Account? <Link to="/signup" style={{ textDecoration: 'none' }} className="">Sign Up</Link></p>
                            <hr />
                            <div className="text-center">
                                <button className="social"><FontAwesomeIcon className="social-icon" icon={faGoogle}></FontAwesomeIcon></button>
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