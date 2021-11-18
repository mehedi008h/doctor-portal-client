import React from 'react';
import Calender from '../../../shared/Calender/Calender';
import Appoienments from '../Admin/Appoienment/Appoienments';

const DashboardHome = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <Calender></Calender>
                </div>
                <div className="col-md-6">
                    <Appoienments></Appoienments>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;