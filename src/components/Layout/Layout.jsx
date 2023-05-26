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
            <div className='flex flex-col h-auto lg:h-screen  w-full lg:w-[30%] mt-auto lg:ml-auto bg-dark-2 items-center'>
                <div className='w-36 h-36 mt-20 border-[2px] rounded-full border-white shadow-lg shadow-gray-950'>
                    <img src={Profile} alt="profile" />
                </div>
                <p className='text-white font-medium text-base mt-10'>Edward Pascual, PSM</p>
                <p className='text-gray-500 text-sm mt-5'>Project Manager at Trapeze Group</p>
                <p className='text-white text-center mt-20 px-[20%]'>“ The excellent design and stability of the app has pleased internal stakeholders. We are very happy with their service. ”</p>
            </div>
        </div>
    )
}

export default Layout