import React from 'react';
import Hero from '../../assets/hero.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Hero} className="max-w-2xl rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold">Discover Lifelong Learning!</h1>
                    <p className="py-6 text-xl">Explore new skills, deepen existing passions, and get lost in creativity. What you find just might surprise and inspire you.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;