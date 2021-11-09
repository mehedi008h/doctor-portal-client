import './AppointmentBanner.css';
import * as React from 'react';
import Calender from '../../../shared/Calender/Calender';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="appointment-baneer d-flex">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Calender date={date} setDate={setDate}></Calender>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;