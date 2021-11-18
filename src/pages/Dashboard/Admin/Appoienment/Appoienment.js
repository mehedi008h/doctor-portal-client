import { CircularProgress, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const Appoienment = ({ date }) => {
    const { user } = useAuth();
    const [appoienments, setAppoienments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAppoienments(data);
                setIsLoading(false);
            });
    }, [date, user.email]);
    return (
        <div>
            <div className="container">
                <div className="appoienments">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5>Appoienments {appoienments.length}</h5>

                        <h5>{date.toLocaleDateString()}</h5>
                    </div>
                    {
                        isLoading && <LinearProgress color="secondary" />
                    }
                    <div className="mt-4">
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appoienments.map(appoienment =>
                                        <tr
                                            key={appoienment._id}
                                        >
                                            <td>{appoienment.patientName}</td>
                                            <td>{appoienment.time}</td>
                                        </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appoienment;