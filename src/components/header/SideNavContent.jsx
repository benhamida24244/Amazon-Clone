import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ArrowBackRounded, KeyboardArrowRight } from '@mui/icons-material';


function SideNavContent() {
    return (
        <div className=''>
            <div className='w-full bg-amazon_light text-white px-6 py-2 flex items-center gap-4'>
           <AccountCircleIcon/>
           <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In</h3>
           </div>
           <div className="py-2 border-b-[1px] border-b-gray-300">
            <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>Digital Content & Devices</h3>
            <ul className='text-sm'>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Music <span><KeyboardArrowRight/></span></li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Kindle E-readers & Books<span><KeyboardArrowRight/></span></li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Appstore<span><KeyboardArrowRight/></span></li>
            </ul>
           </div>
           <div className="py-2 border-b-[1px] border-b-gray-300">
            <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>Shop By Department</h3>
            <ul className='text-sm'>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Electronics<span><KeyboardArrowRight/></span></li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Computers<span><KeyboardArrowRight/></span></li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Smart Home<span><KeyboardArrowRight/></span></li>
            </ul>
           </div>
           <div className="py-2 border-b-[1px] border-b-gray-300">
            <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>Programs & Features</h3>
            <ul className='text-sm'>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Gift Card<span><KeyboardArrowRight/></span></li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>Amazon Live<span><KeyboardArrowRight/></span></li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>International Shopping<span><KeyboardArrowRight/></span></li>
            </ul>
           </div>
        </div>
    );
}

export default SideNavContent;
