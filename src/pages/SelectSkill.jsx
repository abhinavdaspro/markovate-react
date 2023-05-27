import React from 'react'
import { useState } from 'react'
import { MdOutlineClose, MdAdd } from "react-icons/md"
import { HiOutlineChevronDown } from "react-icons/hi"
import SkillSetDropDown from '../components/SkillSetDropDown'
import { useNavigate } from 'react-router'
import { data } from "../data"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const SelectSkill = () => {
    const navigate = useNavigate();
    const skill = useSelector(state => state.skills)
    const [final, setFinal] = useState([])
    const [selectedRole, setSelectedRole] = useState({
        title: skill.title || "",
        skills: skill.skills || []
    })

    useEffect(() => {
        if (Object.values(skill).length > 0) {
            setSelectedRole({
                title: skill.title,
                skills: skill.skills
            })
        }
    }, [skill])

    const filterFinal = (option) => {
        let filtered = final.filter((val) => {
            return val !== option;
        })
        setFinal(filtered)
    }
    return (
        <div>
            <p className='text-black font-normal text-xl'>What skills would you like to see in your new hire?</p>
            <input
                className='placeHolder:text-gray-dark w-full border border-gray-light py-2 px-3 rounded mt-5 focus:outline-none text-sm'
                type="text" placeholder='Desired area of expertise (eg. JavaScript, Ruby etc)' />
            <div className='flex flex-wrap w-full gap-5 mt-5'>
                {final.length > 0 && final.map((val, i) => {
                    return <button key={i}
                        onClick={() => filterFinal(val)}
                        className='px-5 h-auto py-2 flex items-center bg-black rounded-3xl hover:-translate-y-1 transition-transform duration-200 ease-in-out'>
                        <MdOutlineClose size={18} color={'white'} className='mr-2' />
                        <p className='text-white text-sm capitalize'>{val}</p>
                    </button>
                })}
            </div>

            <div className='mt-10 flex items-center'>
                <p className='text-sm text-black mr-3'>Popular skills for</p>
                <SkillSetDropDown title={selectedRole.title} data={data} />
            </div>

            <div className='flex flex-wrap gap-5 mt-10'>
                {selectedRole.skills?.length > 0 && selectedRole.skills.map((val, i) => {
                    return <button
                        onClick={() => {
                            setFinal([...new Set([...final, val])])
                        }}
                        key={i} className='px-5 h-auto py-2 flex items-center bg-gray-light-2 rounded-3xl hover:-translate-y-1 transition-transform duration-200 ease-in-out'>
                        <MdAdd size={18} color={'black'} className='mr-2' />
                        <p className='text-black text-sm capitalize'>{val}</p>
                    </button>
                })}

            </div>
            <div className='mt-10 border-t border-gray-light flex py-5 gap-x-5'>
                <button className='ml-auto bg-white text-black h-9 flex justify-center items-center border border-black rounded-3xl px-8 text-sm font-bold' onClick={() => navigate(-1)}>Back</button>
                <button className='bg-black text-white h-9 flex justify-center items-center rounded-3xl px-8 text-sm font-bold'>Next: Skills</button>
            </div>
        </div>
    )
}

export default SelectSkill