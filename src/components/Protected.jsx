import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

const Protected = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem('token');
        if (!token) {
            setIsLoggedIn(false)
            navigate("/")
        } else {
            setIsLoggedIn(true)
        }

    }, [])


    return (
        isLoggedIn && props.children
    )
}

export default Protected