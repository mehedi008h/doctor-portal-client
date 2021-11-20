import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField, Button, MenuItem } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Profile.css';
import useUser from '../../../hooks/useUser';
import swal from 'sweetalert';

const EditProfile = () => {
    const { id } = useParams();
    const { patient } = useUser();
    const { email, displayName } = patient;
    const [date, setDate] = React.useState(null);
    console.log(date);
    const initialInfo = { displayName: displayName, email: email, address: '', number: '' }
    const [patientInfo, setPatientInfo] = useState(initialInfo);
    console.log(patientInfo);
    const [gender, setGender] = React.useState('Male');
    console.log(gender);

    const handleChange = (event) => {
        setGender(event.target.value);
    };
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...patientInfo };
        newInfo[field] = value;
        setPatientInfo(newInfo);
    }

    const handleUpdateUser = e => {
        const user = {
            ...patientInfo,
            bod: date,
            gender: gender
        }
        fetch('http://localhost:5000/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("Good job!", "Update Profile Successfully!", "success");
                }
            })
        e.preventDefault()
    }

    const genders = [
        {
            value: 'Male',
            label: 'Male',
        },
        {
            value: 'Female',
            label: 'Female',
        },
    ];
    return (
        <div>
            <div className="row">
                <div className="col-md-6 col-md-offset-6 mx-auto">
                    <div className="edit-profile">
                        <form onSubmit={handleUpdateUser} className="mt-4 d-flex flex-column">
                            <TextField
                                onBlur={handleOnBlur}
                                name="displayName"
                                value={displayName}
                                sx={{ width: '100%', marginTop: 3 }}
                                type="text" label="Your Name"
                                variant="outlined" />
                            <TextField
                                onBlur={handleOnBlur}
                                name="email"
                                value={email}
                                sx={{ width: '100%', marginTop: 3 }}
                                type="email" label="Your Email"
                                variant="outlined" />
                            <TextField
                                value={gender}
                                onChange={handleChange}
                                sx={{ width: '100%', marginTop: 3, marginBottom: 3 }}
                                select
                                label="Gender"
                            >
                                {genders.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Your Birth Date"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <TextField
                                onBlur={handleOnBlur}
                                name="number"
                                sx={{ width: '100%', marginTop: 3 }}
                                type="number"
                                label="Your Number"
                                variant="outlined" />
                            <TextField
                                onBlur={handleOnBlur}
                                name="address"
                                sx={{ width: '100%', marginTop: 3 }}
                                type="text"
                                label="Your Address"
                                variant="outlined" />
                            <Button sx={{ width: '100%', marginTop: 3 }} type="submit" variant="contained">Update Profile</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;