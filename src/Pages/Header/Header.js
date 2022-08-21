import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { UserCircleIcon } from '@heroicons/react/solid'

const Header = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    const menuItem = <>
        <li className='text-lg text-white'><Link as={Link} to="/">Home</Link></li>
        <li className='text-lg text-white'><Link as={Link} to="/services">Our Courses</Link></li>
        <li className='text-lg text-white'><Link as={Link} to="/review">Reviews</Link></li>
        <li className='text-lg text-white'><Link as={Link} to="/contact">Contact</Link></li>

        {user ? <button className="btn btn-primary text-white" onClick={logout} >Sign Out</button> : <Link className='text-white btn btn-primary' as={Link} to="login">Login</Link>}
    </>

    return (
        <div className='sticky top-0 z-50'>
            <div className="navbar bg-primary">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl text-white">Skill Up</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className='text-white ml-4'>{user?.displayName}</p>
                    {user ? <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div>

                            <img className="w-10 rounded-full" src={user?.photoURL} />
                        </div>

                    </label> : <UserCircleIcon className="w-12 rounded-full  text-gray-400" />}
                </div>
            </div>

        </div>
    );
};

export default Header;
