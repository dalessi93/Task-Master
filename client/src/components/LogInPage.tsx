import { Link, Navigate, useNavigate } from 'react-router-dom'
import './style/LogIn_SignUpPage.css'
import { BsArrowReturnLeft} from "react-icons/bs"
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ActionType, ApplicationContext } from './context/application-context'

export function LogInPage(){

    const [appState, appAction] = useContext(ApplicationContext);
    
    const navigate = useNavigate();

    useEffect(() => {
        if(appState.currentUser !== null){
            navigate("/account/myJobs")
        }
    }, [appState.currentUser]);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (key: string, value:any) => {
        setLoginData({...loginData, [key]: value});
    }

    const [errorMessage, setErrorMessage] = useState("")

    const login = () => {
        const body = {
            email: loginData.email,
            password: loginData.password
        };

        if(loginData.email === "" || loginData.password === ""){
            setErrorMessage("Ops! seems you forgot some details.")
        }else if(loginData.email != "" && loginData.password != ""){
            axios
                .post('/api/session', body)
                .then((response: any) =>{
                    console.log(response);
                    if (response.data) {
                        appAction({
                            type: ActionType.LOGIN,
                            payload: {
                                user: response.data
                            },
                        });
                    }
                })
                .catch((error) => {
                    if(error.response){
                        console.log(error.response.data);
                        setErrorMessage('Incorrect login details! please try again.');
                    }
                });
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