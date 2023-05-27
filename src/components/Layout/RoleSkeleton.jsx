import React from 'react'

const RoleSkeleton = () => {
    let arr = [1, 2, 3]
    return (
        <div className='mt-10'>{arr.map((val, i) => {
            return <div key={i} className='border border-gray-light rounded h-20 flex mb-5 bg-gray-300 animate-pulse' />
        })}</div>
    )
}

export default RoleSkeleton