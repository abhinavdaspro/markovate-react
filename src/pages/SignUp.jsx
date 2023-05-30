import React from 'react'
import Banner from "../assets/banner.png"
import { FiCheck } from "react-icons/fi"
import { useNavigate } from 'react-router'
import { SignUpDropDown } from '../components/SignUpDropDown'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { Config } from '../Config'
import { BiLoaderAlt } from "react-icons/bi"
import axios from 'axios'

export const SignUp = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        emailAddress: "",
        primaryNumber: "",
        secondaryNumber: "",
        companySize: "",
        companyRevenue: "",
        password: "",
        subscribe: false,
        agreement: false
    })

    const createAccount = () => {
        if (!formData.firstName ||
            !formData.lastName ||
            !formData.companyName ||
            !formData.emailAddress ||
            !formData.primaryNumber ||
            !formData.companySize ||
            !formData.companyRevenue ||
            !formData.password
        ) {
            toast.error("Please fill all the fields.");
            return;
        }
        if (!/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(formData.emailAddress)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (formData.primaryNumber && formData.primaryNumber.length < 10) {
            toast.error("Please enter a valid contact number.");
            return;
        }
        if (formData.secondaryNumber && formData.secondaryNumber.length < 10) {
            toast.error("Please enter a valid optional contact number.");
            return;
        }

        if (!formData.agreement) {
            toast.error("Please check the agreements.");
            return;
        }
        setLoading(true)

        let url = `${Config.url}/user/register`

        axios.post(url, formData).then(res => {
            // console.log("success---", res.data);
            setLoading(false)
            localStorage.setItem("token", `Bearer ${res.data.token}`)
            navigate("/hire");
        }).catch(err => {
            setLoading(false)
            toast.error("Something went wrong.");
        })
    }

    return (
        <div className='flex min-h-screen h-full w-full flex-col bg-extra-light'>
            <div className='h-20 bg-red-200 w-full bg-transparent flex items-center px-16'>
                <img src={Banner} alt="banner-img" />
            </div>
            <div className="h-full w-full bg-transparent py-12 flex justify-center">
                <div className='bg-white max-w-2xl w-full h-auto rounded shadow-lg px-5 xs:px-8 md:px-20 py-5 xs:py-10 mx-2 xs:mx-10'>
                    <p className='text-center font-bold text-2xl xs:text-[32px]'>Sign up to hire talent</p>
                    <div className='grid grid-cols-1 mt-10 gap-y-3 xs:gap-y-5'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5 '>
                            <input
                                value={formData.firstName}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    firstName: e.target.value
                                }))}
                                type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'

                                placeholder='First Name' />
                            <input
                                value={formData.lastName}
                                onChange={(e) => setFormData(prev => ({
                                    ...prev,
                                    lastName: e.target.value
                                }))} type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                                placeholder='Last Name' />
                        </div>
                        <input
                            value={formData.companyName}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                companyName: e.target.value
                            }))} type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                            placeholder='Company Name' />
                        <input
                            value={formData.emailAddress}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                emailAddress: e.target.value
                            }))}
                            type="text" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                            placeholder='Work email address' />
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5'>
                            <input
                                value={formData.primaryNumber}
                                onChange={(e) => {
                                    if (e.target.value.length < 11) {
                                        setFormData(prev => ({
                                            ...prev,
                                            primaryNumber: e.target.value
                                        }))
                                    }
                                }}
                                type="number" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                                placeholder='Contact no.' />
                            <input
                                value={formData.secondaryNumber}
                                onChange={(e) => {
                                    if (e.target.value.length < 11) {
                                        setFormData(prev => ({
                                            ...prev,
                                            secondaryNumber: e.target.value
                                        }))
                                    }
                                }} type="number" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                                placeholder='Contact no. (optional)' />
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5'>
                            <SignUpDropDown title={formData.companySize || 'Company Size'} data={[1, 2, 3]} setFormData={setFormData} type="size" />
                            <SignUpDropDown title={formData.companyRevenue || 'Company Revenue'} data={[1, 2, 3]} setFormData={setFormData} type="revenue" />
                        </div>
                        <input
                            value={formData.password}
                            onChange={(e) => setFormData(prev => ({
                                ...prev,
                                password: e.target.value
                            }))}
                            type="password" className='border border-gray-light rounded focus:outline-none py-[0.3rem] px-4 font-normal text-gray-dark placeholder:text-gray-dark'
                            placeholder='Password' />

                        <div className='flex items-center'>
                            <button
                                onClick={() => setFormData(prev => ({
                                    ...formData,
                                    subscribe: !prev.subscribe
                                }))}
                                className={`h-4 w-4  rounded-[2px] cursor-pointer flex justify-center items-center ${formData.subscribe ? "bg-slate-900" : "bg-white border-2 border-gray-500"} `} >
                                <FiCheck size={15} className="text-white" />
                            </button>
                            <p className='ml-3 text-sm text-gray-500'>Send me emails with regarding talents that fits my needs</p>
                        </div>

                        <div className='flex'>
                            <button
                                onClick={() => setFormData(prev => ({
                                    ...formData,
                                    agreement: !prev.agreement
                                }))}
                                className={`h-4 w-4  rounded-[2px] cursor-pointer flex justify-center items-center ${formData.agreement ? "bg-slate-900" : "bg-white border-2 border-gray-500"} `} >
                                <FiCheck size={15} className="text-white" />
                            </button>
                            <p className='-mt-[1px] ml-3 text-sm text-gray-500'>Yes, I understand and agree to the <span className='text-gray-950 cursor-pointer font-medium'>Terms of Service</span>, including <span className='text-gray-950 cursor-pointer font-medium'>User Agreement</span> and <span className='text-gray-950 cursor-pointer font-medium'>Privacy Policy</span>.</p>
                        </div>

                    </div>
                    <button
                        disabled={loading}
                        onClick={createAccount} className='bg-dark mt-10 w-full h-10 rounded-3xl text-white text-sm font-semibold flex justify-center items-center'>
                        {loading ? <BiLoaderAlt size={22} color={'#fff'} className='animate-spin' /> : "Create my account"}</button>
                    <p className='text-center mt-10 text-gray-500 text-sm'>Already have an account? <span className='cursor-pointer text-gray-950 font-semibold'>Login</span></p>
                    <p className='mt-10 text-center text-xs text-gray-500'>&#169; Copyright 2010 - {new Date().getFullYear()} Markovate</p>
                </div>

            </div>
        </div>
    )
}
