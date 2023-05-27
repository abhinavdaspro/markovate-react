import React from 'react'
import { data } from '../data'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { setSkill } from "../redux/reducers/skillReducer"

const SelectHire = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const skill = useSelector(state => state.skills)
    const handleNext = () => {
        navigate("/skills")
    }
    const storeSelected = (option) => {
        console.log(option)
        dispatch(setSkill(option))
    }
    return (
        <div>
            <p className='text-black text-2xl font-bold'>Thank you for your interest in Markovate.</p>
            <p className='text-black mt-10 font-normal text-xl'>What role would you like to hire?</p>
            <div className='mt-10 flex flex-col gap-y-10'>
                {data.map((val, i) => {
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