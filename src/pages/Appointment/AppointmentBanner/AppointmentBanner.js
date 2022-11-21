import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import doctorBg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {



    return (
        <header className='my-32'>
            <div className="hero">
                <div className="hero-content flex justify-between flex-col lg:flex-row-reverse">
                    <img src={chair} alt="Chair" className="max-w-sm lg:ml-32 lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;