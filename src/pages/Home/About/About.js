import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className="d-flex align-items-center p-4 about-item one">
                            <div>
                                <h1 className="fw-bold"><FontAwesomeIcon className="icon" icon={faClock}></FontAwesomeIcon></h1>
                            </div>
                            <div className="ms-4">
                                <h4>Opening Hour</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center p-4 about-item two">
                            <div>
                                <h1 className="fw-bold"><FontAwesomeIcon className="icon" icon={faLocationArrow}></FontAwesomeIcon></h1>
                            </div>
                            <div className="ms-4">
                                <h4>Visit Our Location</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex align-items-center p-4 about-item one">
                            <div>
                                <h1><FontAwesomeIcon className="icon" icon={faPhone}></FontAwesomeIcon></h1>
                            </div>
                            <div className="ms-4">
                                <h4>Contact Us Now</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;