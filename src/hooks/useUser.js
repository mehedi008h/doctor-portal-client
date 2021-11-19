import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const useUser = () => {
    const [patient, setPatient] = useState({});
    const { user } = useAuth();
    const { email } = user;

    useEffect(() => {
        const url = `http://localhost:5000/dashboard/profile/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPatient(data));
    }, [])

    return {
        patient
    }


};

export default useUser;