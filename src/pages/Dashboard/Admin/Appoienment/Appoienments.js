import * as React from 'react';
import { Table } from 'react-bootstrap';
import Calender from '../../../../shared/Calender/Calender';
import Appoienment from './Appoienment';
import './Appoienment.css';

const Appoienments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </div>
                <div className="col-md-6">
                    <Appoienment
                        date={date}
                    ></Appoienment>
                </div>
            </div>
        </div>
    );
};

export default Appoienments;