import './AppointmentBanner.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';

const AppointmentBanner = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <div className="appointment-baneer d-flex">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <StaticDatePicker
                                displayStaticWrapperAs="desktop"
                                openTo="day"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;