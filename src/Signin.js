import React, { useEffect, useState } from "react";
import {auth,provider} from "./Authtication";
import {signInWithPopup} from "firebase/auth";
import App from './App';
function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    },[])

return (
    <div>
        {value?<App/>:
        <button onClick={handleClick} style={{position:'relative',left:'50rem',top:'20rem'}}>Signin With Google</button>
        }
    </div>
);
}
export default SignIn;