import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../App.css"

export default function Login() {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [passsword,setPassword] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)
    const handleSubmit = () => {
        if(email.length <= 15 && email.length >= 10){
            setIsSuccess(true)
        }else if(email.includes("@")){
            setIsSuccess(true)
        }

        console.log(email)
        console.log(passsword)
        console.log(isSuccess)
        if(isSuccess){
            navigate(`/dashboard/${email}`)
            // setIsSuccess(false)
        }
    }

    return (
        <div className='container'>
            <div className='form'>
                <h1>Halaman Login</h1>
                {/* {isError && (
                    <p>ERROR</p>
                )} */}
                    <label>Email</label>
                    <br/>
                    <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} includes/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} includes/>
                    <br/>
                    <button type='submit' onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}
