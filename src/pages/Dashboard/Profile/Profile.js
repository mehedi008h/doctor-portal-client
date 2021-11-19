import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useUser from '../../../hooks/useUser';

const Profile = () => {
    const { patient } = useUser();
    console.log(patient);
    const { _id, displayName } = patient;
    return (
        <div>
            <h3>{displayName}</h3>
            <h3>{_id}</h3>
            <div className="row">
                <div className="col-md-3">
                    <Link to={`/dashboard/edit-profile/${_id}`}>Edit Profile</Link>
                </div>
                <div className="col-md-9">

                </div>
            </div>
        </div>
    );
};

export default Profile;