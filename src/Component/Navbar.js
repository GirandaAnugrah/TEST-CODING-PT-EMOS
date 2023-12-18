import React from 'react'
import "../App.css"
import { useNavigate } from "react-router-dom";

function Navbar({email}) {
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate("/")
    }
  return (
    <div className='navbar'>

        <p>{email}</p>
        <button type='submit' onClick={navigateToLogin}>Logout</button>
    </div>
  )
}

export default Navbar