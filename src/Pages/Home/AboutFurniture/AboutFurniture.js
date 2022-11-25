import React from 'react';
import furniture from '../../../assets/images/furnitureSection.jpg';

const AboutFurniture = () => {
    return (
        <div className='my-20'>
            <div className="hero min-h-[500px]" style={{ backgroundImage: `url(${furniture})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full">
                    <h1 className="mb-5 md:text-5xl text-xl font-bold">Everything is designed. Few things are designed well.</h1>
                    <p className="mb-5">As time goes by the memories of sitting on the edge of a bed and reading aloud with your kid are going to be very meaningful in your own mental scrapbook. Every lesson I learned as a kid was at the dinner table. Being Greek, Sicilian and Ruthenian – we are an emotional bunch. It is where we laughed, cried, and yelled – but most importantly, where we bonded and connected. The oldest form of theater is the dinner table. It’s got five or six people, new show every night, same players. Good ensemble; the people have worked together a lot.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFurniture;