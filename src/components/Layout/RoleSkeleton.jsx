import React from 'react'

const RoleSkeleton = () => {
    let arr = [1, 2, 3]
    return (
        arr.map((val, i) => {
            return <div key={i} className='border border-gray-light rounded px-10 py-5 flex'>

            </div>
        })

    )
}

export default RoleSkeleton