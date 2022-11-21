import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn border-none bg-gradient-to-r from-secondary to-primary text-white">{children}</button>
        </div>
    );
};

export default PrimaryButton;