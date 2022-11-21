import React from 'react';

const infoCart = ({ infoCart }) => {
    const { id, name, description, icon, bgClass } = infoCart;
    return (

        <div className={`${bgClass} shadow-xl lg:flex justify-center text-center items-center p-[52px] rounded-[14px]`}>
            <div className='flex justify-center'>
                <img className='lg:mr-[22px] mb-6 ' src={icon} alt="" />
            </div>
            <div className='text-white'>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p>{description}</p>
            </div>
        </div>

    );
};

export default infoCart;