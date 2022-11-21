import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl flex justify-center">
            <div className="card-body text-center py-10">
                <h2 className="card-title text-xl justify-center font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn border-none bg-gradient-to-r from-secondary to-primary text-white"
                        onClick={() => setTreatment(option)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;