import React from 'react';
import { BookOpenIcon, ChatIcon, GlobeIcon, UserGroupIcon } from '@heroicons/react/solid';
const Reviews = () => {
    return (
        <div className='my-14'>
            <h1 className='text-center text-5xl font-bold  my-8'>Skills for your present (and your future). Get started with us.</h1>
            <p className='text-center text-xl mt-5'>Choose from 4,000 online video courses with new additions published every month</p>
            <div className="grid grid-flow-row auto-rows-max">
                <div className="stats stats-vertical lg:stats-horizontal shadow my-5 justify-center">
                    <div className="stat h-40">
                        <div className="stat-figure text-secondary">
                            <UserGroupIcon className='w-12 mx-auto font-bold'></UserGroupIcon>
                        </div>
                        <div className="stat-title">Students</div>
                        <div className="stat-value">4000+</div>
                        <div className="stat-desc">Jan 1st - Mar 1st</div>
                    </div>

                    <div className="stat ">
                        <div className="stat-figure text-secondary">
                            <BookOpenIcon className='w-12 mx-auto font-bold'></BookOpenIcon>
                        </div>
                        <div className="stat-title">Courses</div>
                        <div className="stat-value">2200+</div>
                        <div className="stat-desc">31 Upload remaining</div>
                    </div>

                    <div className="stat h-40">
                        <div className="stat-figure text-secondary">
                            <ChatIcon className='w-12 mx-auto font-bold'></ChatIcon>
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value">33K+</div>
                        <div className="stat-desc">90 (14%)</div>
                    </div>
                    <div className="stat ">
                        <div className="stat-figure text-secondary">
                            <GlobeIcon className='w-12 mx-auto font-bold  '></GlobeIcon>
                        </div>
                        <div className="stat-title">Country</div>
                        <div className="stat-value">22+</div>
                        <div className="stat-desc">80 (55%)</div>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Reviews;