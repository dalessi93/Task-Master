import { Link, Navigate, useNavigate } from 'react-router-dom'
import './style/LogIn_SignUpPage.css'
import { BsArrowReturnLeft} from "react-icons/bs"
import { useState } from 'react'
import axios from 'axios'

export function LogInPage(){
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (key: string, value:any) => {
        setLoginData({...loginData, [key]: value});
    }

    const [errorMessage, setErrorMessage] = useState("")

    const login = () => {
        if(loginData.email === "" || loginData.password === ""){
            setErrorMessage("Ops! seems you forgot some details.")
        }

        if(loginData.email != "" && loginData.password != ""){
            axios
                .post('api/sessions', {
                    email: loginData.email,
                    password:loginData.password,
                }).then((response: any) =>{
                    // useNavigate('/account');
                    console.log(response)
                })
        }
    }

    return (
        <div id="home_page">
            {/* Header */}
            <div className="top-navbar">
                <div className="logo">Task Master</div>
                <div className="menu">
                    <div className="avatar">
                        <span><Link to="/"><BsArrowReturnLeft/></Link></span>
                    </div>
                </div>
            </div>
            {/* Body */}
            <div className="home-content">
                <div>
                    <h3>Log In</h3>
                    <div>
                        <div>
                            <label>Email:</label>
                            <br />
                            <input type="email" value={loginData.email} onChange={(event: any) => {
                                handleChange("email", event.target.value)
                            }}/>
                        </div>
                        <div>
                            <label>Password:</label>
                            <br />
                            <input type="password" value={loginData.password} onChange={(event: any) => {
                                handleChange("password", event.target.value)
                            }}/>
                        </div>
                        <div className='error'>
                            {errorMessage}
                        </div>
                        <div>
                            <input type="submit" value="Continue" onClick={login} />
                        </div>
                        <div className="foot">
                            <div>  
                                Don't have an account?
                            </div>
                            <div>
                                <span className='link'><Link to="/signup">Sign up</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}