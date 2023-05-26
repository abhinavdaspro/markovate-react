import React from 'react'
import { Outlet } from 'react-router'
import FavIcon from "../../assets/FavIcon.png"
import Profile from "../../assets/profile.png";

const Layout = () => {
    return (
        <div className='flex min-h-screen h-full w-full flex-col lg:flex-row bg-white'>
            <div>
                <div className='h-16 w-full bg-transparent flex items-center px-16'>
                    <img src={FavIcon} alt="banner-img" />
                </div>
                <div className='mt-10'>
                    <Outlet />
                </div>
            </div>
            <div className='flex flex-row lg:flex-col h-auto lg:h-screen  w-full lg:w-[30%] mt-auto lg:ml-auto bg-dark-2 items-center px-5 sm:px-[5%] lg:px-0'>
                <div className='lg:mt-10 flex flex-col items-center justify-center w-[50%] lg:w-full'>
                    <div className='w-20 lg:w-36 h-20 lg:h-36 mt-10 lg:mt-20 border-[2px] rounded-full border-white shadow-lg shadow-gray-950'>
                        <img src={Profile} alt="profile" />
                    </div>
                    <p className='text-white font-medium text-xs lg:text-base mt-5 lg:mt-10'>Edward Pascual, PSM</p>
                    <p className='text-gray-500 text-xs lg:text-sm mt-2 lg:mt-5 text-center mb-10 lg:mb-0'>Project Manager at Trapeze Group</p>
                </div>
                <div className='flex justify-center w-[50%] lg:w-full'>
                    <p className='text-white text-center lg:mt-20  lg:px-[20%]  w-[60%] lg:w-auto text-xs sm:text-base'>“ The excellent design and stability of the app has pleased internal stakeholders. We are very happy with their service. ”</p>
                </div>


            </div>
        </div>
    )
}

export default Layout