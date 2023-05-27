import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { HiOutlineChevronDown } from "react-icons/hi"


export const SignUpDropDown = (props) => {

    const handleSelect = (option) => {
        switch (props.type) {
            case "size": {
                props.setFormData(prev => ({
                    ...prev,
                    companySize: option
                }))
                break;
            }
            case "revenue": {
                props.setFormData(prev => ({
                    ...prev,
                    companyRevenue: option
                }))
                break;
            }
            default: break;
        }
    }
    return (
        <Menu as="div" className="relative inline-block">
            <div>
                <Menu.Button className="border border-gray-light rounded text-gray-dark py-[0.3rem] px-4 w-full flex items-center">
                    {props.title}
                    <HiOutlineChevronDown size={15} className='ml-auto' />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            <div>
                                {props.data.map((val, i) => {
                                    return <button key={i}
                                        onClick={() => {
                                            handleSelect(val)
                                        }}
                                        className={`text-black group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {val}
                                    </button>
                                })}
                            </div>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
