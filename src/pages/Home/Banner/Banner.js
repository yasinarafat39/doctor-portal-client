import React from 'react';
import bg from '../../../assets/images/bg.png';
import Chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton';



const Banner = () => {
    return (
        <div>
            <div className="hero lg:my-40 my-16" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'cover' }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} className="lg:w-1/2 rounded-lg shadow-2xl mb-16" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Start</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;