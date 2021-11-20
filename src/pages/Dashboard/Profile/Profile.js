import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useUser from '../../../hooks/useUser';
import './Profile.css';

const Profile = () => {
    const { patient } = useUser();
    const { user } = useAuth();
    const { _id, displayName, email, gender, address, bod, number } = patient;
    return (
        <div className="container">
            <div className="profile">
                <div className="d-flex align-items-center justify-content-between ps-4 pe-4 pt-4">
                    <h4>My Profile</h4>
                    <Link to={`/dashboard/edit-profile/${_id}`}>Edit Profile</Link>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-5 p-4">
                        <div className="text-center">
                            <img src={user.photoURL} alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 p-4">
                        <div class="table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></td>
                                        <td>Full Name</td>
                                        <td>{displayName}</td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></td>
                                        <td>Email</td>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></td>
                                        <td>Gender</td>
                                        <td>{gender}</td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></td>
                                        <td>Phone</td>
                                        <td>{number}</td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></td>
                                        <td>Birth Date</td>
                                        <td>{bod}</td>
                                    </tr>
                                    <tr>
                                        <td><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon></td>
                                        <td>Address</td>
                                        <td>{address}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;