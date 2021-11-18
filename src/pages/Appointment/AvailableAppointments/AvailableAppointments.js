import { Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
import './AvailableAppoienment.css';

const AvailableAppointments = ({ date }) => {
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            space: 10,
        },
    ]

    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <div className="available-appoienment d-flex">
            <div className="container mt-5 mb-5">
                <Typography sx={{ color: 'info.main', mb: 3, textAlign: 'center' }} variant="h4">Available Appointments on {date.toDateString()}</Typography>
                <div className="row g-3">
                    {
                        bookings.map(booking => <div className="col-md-4">
                            <Booking
                                key={booking.id}
                                booking={booking}
                                date={date}
                                setBookingSuccess={setBookingSuccess}
                            >
                            </Booking>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default AvailableAppointments;