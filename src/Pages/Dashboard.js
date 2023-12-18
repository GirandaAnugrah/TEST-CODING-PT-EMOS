import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Navbar from '../Component/Navbar';

export default function Dashboard() {
    const {email} = useParams()
    const [currEmail,setCurrEmail] = useState("")
    const [time,setTime] = useState("")
    const [greeting,setGreeting] = useState("")
    function handleEmail(email){
        let result = ""
        
        for (let i = 0; i < email.length; i++) {
            if(email[i] === "@") break;
            result += email.charAt(i); 
        }
        setCurrEmail(result)
    }

    function getTime(){
        const date = new Date()
        const timeNow = date.getHours()
        const minutes = date.getMinutes()
        if(timeNow >= 5 && timeNow < 11){
            setGreeting("Selemat Pagi")
        }else if(timeNow >= 11  && timeNow < 17){
            setGreeting("Selamat Siang")
        }else if(timeNow >= 17  && timeNow < 20){
            setGreeting("Selamat Sore")
        }else if(timeNow >= 20  && timeNow < 24){
            setGreeting("Selamat Malam")
        }
        setTime(`${timeNow}: ${minutes}`)

    }


    useEffect(() => {
        handleEmail(email)
        getTime()
    },[])
    return (
        <div>
            <Navbar email={email}/>
            <div className='container'>
                <div className='content'>
                    <div>
                        <p>{greeting}</p>
                    </div>
                    <div>
                        <p>{currEmail}</p>
                    </div>
                    <div>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
