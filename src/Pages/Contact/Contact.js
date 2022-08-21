import React from 'react';
import contact from '../../assets/contact.jpg';

const Contact = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${contact})`
        }}>
            < div className="hero-overlay bg-opacity-70" ></div >
            <div className="card max-h-screen bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h1 className='text-center text-3xl font-bold my-5'>Contact Us</h1>
                    <h2 className="card-title">Have any Question about us or get a product request ?</h2>
                    <p>Don't hesitate to contact us</p>
                    <div>
                        <div className="form-control m-4">
                            <input type="text" placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control m-4">
                            <input type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control m-4">
                            <textarea className="textarea textarea-bordered" placeholder="Your Massage"></textarea>
                        </div>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary text-white ">Contact Us</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;