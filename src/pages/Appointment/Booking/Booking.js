import React from 'react';
import BookingModal from '../BookingModal/BookingModal';
import './Booking.css';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <div className="item">
                <h4>{name}</h4>
                <h5>{time}</h5>
                <p>{space}</p>
                <button onClick={handleBookingOpen} className="btn btn-info">Booking</button>
            </div>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            >

            </BookingModal>
        </>
    );
};

export default Booking;