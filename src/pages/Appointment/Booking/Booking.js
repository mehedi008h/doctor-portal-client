import React from 'react';
import './Booking.css';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    return (
        <div>
            <div className="item">
                <h4>{name}</h4>
                <h5>{time}</h5>
                <p>{space}</p>
                <button className="btn btn-info">Booking</button>
            </div>
        </div>
    );
};

export default Booking;