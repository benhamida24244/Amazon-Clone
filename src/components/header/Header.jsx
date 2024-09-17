import React, { useState } from 'react';
import { logo } from "../../assets/index.js";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { allItems } from '../../constants/index.js';
import HeaderButton from './HeaderButton.jsx';
import SideNavContent from './SideNavContent.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const [showAll, setShowAll] = useState(false);
    const cart = useSelector((state) => state.amazon.cart);
    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='sticky top-0 z-50'>
            <div className='b-10 w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
                {/* Logo */}
                <Link to="/" className='headerHover'>
                    <img className='w-24 mt-2' src={logo} alt="logo" />
                </Link>

                {/* Delivery Section */}
                <div className="headerHover hidden md:flex lg:flex items-center">
                    <LocationOnIcon />
                    <div className="ml-1">
                        <p className='text-sm'>Deliver to</p>
                        <span className='font-bold'>Oman</span>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="h-10 rounded-md hidden md:flex lg:flex flex-grow relative">
                    <span
                        onClick={() => setShowAll(!showAll)}
                        className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer
                        duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center
                        rounded-tl-md rounded-bl-md'>
                        All <ArrowDropDownIcon />
                    </span>
                    {showAll && (
                        <div className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll
                        overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2
                        flex-col gap-1 z-50'>
                            <ul>
                                {allItems.map((item) => (
                                    <li key={item._id} className="cursor-pointer hover:bg-gray-200 p-2">{item.title}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <input
                        className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2'
                        type="text"
                        placeholder="Search"
                    />
                    <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847]
                    duration-300 text-amazon_blue cursor-pointer
                    rounded-tr-md rounded-br-md'>
                        <SearchIcon />
                    </span>
                </div>

                {/* Sign-In Section */}
                <Link to="/signin" className='headerHover flex flex-col'>
                    <p className='text-sm'>Hello, Sign in</p>
                    <span className='font-bold hidden md:block lg:block'>Account & Lists</span>
                </Link>

                {/* Orders Section */}
                <div className='headerHover hidden md:flex lg:flex  flex-col'>
                    <p className='text-sm'>Returns</p>
                    <span className='font-bold'>& Orders</span>
                </div>

                {/* Cart Section */}
    <Link to="/cart" className='headerHover flex item-start justify-center relative'>
        <ShoppingCartIcon />
        <p className='text-xs font-semibold mt-3 text-whiteText'>
            Cart
            <span className='absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-amazon_yellow text-amazon_blue rounded-full flex items-center justify-center'>{cartItemsCount}</span>
        </p>
    </Link>
            </div>
            <HeaderButton/>
        </div>
    );
}

export default Header;
