import React, { useCallback, useEffect, useState } from 'react'
import { data } from '../data'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { setSkill } from "../redux/reducers/skillReducer"
import { toast } from 'react-toastify';
import axios from 'axios';
import { Config } from '../Config';
import RoleSkeleton from '../components/Layout/RoleSkeleton';

const SelectHire = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const skill = useSelector(state => state.skills)
    const [roles, setRoles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchSkills();
    }, [])

    const handleNext = () => {
        if (Object.values(skill).length === 0) {
            toast.warning("Please select one role.")
            return;
        }
        navigate("/skills")
    }
    const storeSelected = (option) => {
        console.log(option)
        dispatch(setSkill(option))
    }

    const fetchSkills = useCallback(() => {
        setLoading(true);
        let headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        let url = `${Config.url}/skill/find`;
        setLoading(true)
        axios.get(url, headers).then(res => {
            setLoading(false)
            if (res.data.data.length > 0) {
                setRoles(res.data.data)
            }
        }).catch(err => {
            toast.warning("Something went wrong. Please try after sometime.")
            setLoading(false)
        })
    }, [])

    return (
        <div>
            <p className='text-black text-2xl font-bold'>Thank you for your interest in Markovate.</p>
            <p className='text-black mt-10 font-normal text-xl'>What role would you like to hire?</p>

            {loading && <RoleSkeleton />}
            <div className='mt-10 flex flex-col gap-y-10'>
                {roles.length > 0 && roles.map((val, i) => {
                    return <div key={i} className='border border-gray-light rounded px-10 py-5 flex'>
                        <div className='pr-5 pt-1'>
                            <button onClick={() => {
                                storeSelected(val)
                            }} className='h-[1.1rem] w-[1.1rem] rounded-full border border-black flex justify-center items-center cursor-pointer'>
                                {skill.title === val.title && <div className='bg-black rounded-full h-[0.6rem] w-[0.6rem]' />}
                            </button>
                        </div>
                        <div>
                            <p className='text-black text-base'>{val.title}</p>
                            <p className='text-gray-dark text-sm mt-2'>{val.description}</p>
                        </div>


                    </div>
                })}

            </div>
            <div className='mt-10 border-t border-gray-light flex py-5 gap-x-5'>
                <button className='ml-auto bg-white text-black h-9 flex justify-center items-center border border-black rounded-3xl px-8 text-sm font-bold' onClick={() => navigate(-1)}>Back</button>
                <button className='bg-black text-white h-9 flex justify-center items-center rounded-3xl px-8 text-sm font-bold' onClick={handleNext}>Next: Skills</button>
            </div>
        </div>
    )
}

export default SelectHire