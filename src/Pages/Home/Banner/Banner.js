import React from 'react';
import banner from '../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 h-[600px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='' className="rounded-lg lg:w-1/2 w-screen" />
                <div>
                <h1 className="text-5xl font-bold"> 2022 Top Quality Furniture</h1>
                <h3 className="text-2xl font-semibold pt-4"> Everything is designed. Few things are designed well.</h3>
                <p className="py-6">I think about every tree that is cut down, and the power and privilege we have to extend its life and to display its beauty in the furniture we make.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;