import './AppointmentBanner.css';
import * as React from 'react';
import Calender from '../../../shared/Calender/Calender';
import appoienment from '../../../images/appoienment.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="appointment-baneer d-flex">
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-4 bg-info">
                            <Calender date={date} setDate={setDate}></Calender>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            <img width="70%" src={appoienment} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;