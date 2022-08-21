import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card lg:card-side m-4 h-64 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <h3 className='text-lg font-bold text-left'>Price: {service.price}$</h3>
                <h2 className='text-lg font-semibold text-left'>{service.description}</h2>
                <div className="card-actions ">
                    <button className="btn btn-primary btn-wide">Buy Now...</button>
                </div>
            </div>
        </div>
    );
};

export default Service;