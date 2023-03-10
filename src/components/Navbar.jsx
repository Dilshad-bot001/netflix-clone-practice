import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

    const [show, setShow] = useState(false)

    const navigate = useNavigate();

    const transitionNavBar = () => {
        if(window.scrollY > 100){
            setShow(true)
        } else{
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img onClick={() => navigate('/')} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className='nav__logo' />

                <img onClick={() => navigate('/profile')} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className='nav__avatar' />
            </div>
        </div>
    )
}

export default Navbar