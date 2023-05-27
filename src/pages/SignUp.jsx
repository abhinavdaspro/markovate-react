import React from 'react'
import Banner from "../assets/banner.png"
import { HiOutlineChevronDown } from "react-icons/hi"
import { FiCheck } from "react-icons/fi"
import { useNavigate } from 'react-router'

export const SignUp = () => {
    const navigate = useNavigate();

    const createAccount = () => {
        navigate("/hire");
    }

    return (
        <div className='flex min-h-screen h-full w-full flex-col bg-extra-light'>
            <div className='h-20 bg-red-200 w-full bg-transparent flex items-center px-16'>
                {/* <img src={Banner} alt="banner-img" /> */}
            </div>
            <div className="h-full w-full bg-transparent py-12 flex justify-center">
                <div className='bg-white max-w-2xl w-full h-auto rounded shadow-lg px-5 xs:px-8 md:px-20 py-5 xs:py-10 mx-2 xs:mx-10'>
                    {/* <p className='text-center font-bold text-2xl xs:text-[32px]'>Sign up to hire talent</p> */}
                    <div className='grid grid-cols-1 mt-10 gap-y-3 xs:gap-y-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 '>
                            <input type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'

                                placeholder='First Name' />
                            <input type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                                placeholder='Last Name' />
                        </div>
                        <input type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                            placeholder='Company Name' />
                        <input type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                            placeholder='Work email address' />
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5'>
                            <input type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                                placeholder='Contact no.' />
                            <input type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                                placeholder='Contact no. (optional)' />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5'>
                            <div className='flex items-center border border-gray-light rounded'>
                                <input type="text" className=' focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                                    placeholder='Contact no.' />
                                <HiOutlineChevronDown className="h-5 w-5 text-slate-800 ml-auto mr-2" />
                            </div>


                        </div>
                        <input type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                            placeholder='Password' />

                        <div className='flex items-center'>
                            <div className='h-4 w-4 border border-gray-500 rounded-[2px] cursor-pointer flex justify-center items-center bg-slate-900' >
                                <FiCheck size={15} className="text-white" />
                            </div>
                            <p className='ml-3 text-sm text-gray-500'>Send me emails with regarding talents that fits my needs</p>
                        </div>

                        <div className='flex'>
                            <div className='h-4 w-4 border-2 border-gray-500 rounded-[2px] cursor-pointer flex justify-center items-center bg-white' >
                                <FiCheck size={15} className="text-white" />
                            </div>
                            <p className='-mt-[1px] ml-3 text-sm text-gray-500'>Yes, I understand and agree to the <span className='text-gray-950 cursor-pointer font-medium'>Terms of Service</span>, including <span className='text-gray-950 cursor-pointer font-medium'>User Agreement</span> and <span className='text-gray-950 cursor-pointer font-medium'>Privacy Policy</span>.</p>
                        </div>

                    </div>
                    <button onClick={createAccount} className='bg-dark mt-10 w-full h-10 rounded-3xl text-white text-sm font-semibold'>Create my account</button>
                    <p className='text-center mt-10 text-gray-500 text-sm'>Already have an account? <span className='cursor-pointer text-gray-950 font-semibold'>Login</span></p>
                    <p className='mt-10 text-center text-xs text-gray-500'>&#169; Copyright 2010 - {new Date().getFullYear()} Markovate</p>
                </div>

            </div>
        </div>
    )
}
