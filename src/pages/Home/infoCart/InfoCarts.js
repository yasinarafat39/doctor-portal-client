import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import location from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCart from '../infoCart/InfoCart';;

const infoCarts = () => {

    const infoCartData = [
        {
            id: 1,
            name: "Opening Hours",
            description: "10:00 Am - 4:00 Pm everyday",
            icon: clock,
            bgClass: "bg-gradient-to-r from-secondary to-primary"
        },
        {
            id: 2,
            name: "Visit Our Location",
            description: "Brooklyn, NY 10036, United States",
            icon: location,
            bgClass: "bg-accent items-center"
        },
        {
            id: 3,
            name: "Contact us now",
            description: "+000 123 456789",
            icon: phone,
            bgClass: "bg-gradient-to-r from-secondary to-primary"
        },
    ]

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-28'>
            {
                infoCartData.map(infoCart => <InfoCart
                    key={infoCart.id}
                    infoCart={infoCart}
                ></InfoCart>)
            }
        </div>
    );
};

export default infoCarts;