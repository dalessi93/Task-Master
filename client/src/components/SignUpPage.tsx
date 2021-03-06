import { Link, useNavigate } from 'react-router-dom';
import './style/LogIn_SignUpPage.css'
import { BsArrowReturnLeft} from "react-icons/bs"
import { useState } from 'react';
import axios from 'axios'

export function SignUpPage(){
    const navigate = useNavigate();

    const [createAccount, setcreateAccount] = useState({
        email: "",
        password: "",
        password2: "",
        username: ""
    });

    const handleChange = (key: string, value:any) => {
        setcreateAccount({...createAccount, [key]: value});
    }

    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const signUp = () => {
        if(createAccount.email === "" || createAccount.password === "" || createAccount.password2 === "" || createAccount.username === ""){
            setErrorMessage("Ops! You forgot to fill a mandatory field.")
        } else if(createAccount.password !== createAccount.password2){
            setErrorMessage("The password don't match. Please try again.")
        } else {
            axios.post("/api/signup", {
                email: createAccount.email,
                password: createAccount.password,
                username: createAccount.username
            }).then((response: any) => response.data).then((data: any) => {
                setSuccessMessage("Account has been created! redirecting...")
                console.log("account created")
                setErrorMessage("")
                setTimeout(() => {
                    navigate("/login")
                }, 3000);
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
                <div className='access-form-2'>
                    <div>
                        <h3>Sign Up</h3>
                        <div>
                            <div className='section'>
                                <label>Email:</label>
                                <br />
                                <input type="email" value={createAccount.email} onChange={(event: any) => {
                                    handleChange("email", event.target.value)
                                }}/>
                            </div>
                            <div className='section'>
                                <label>Password:</label>
                                <br />
                                <input type="password" value={createAccount.password} onChange={(event: any) => {
                                    handleChange("password", event.target.value)
                                }}/>
                            </div>
                            <div className='section'>
                                <label>Confirm Password:</label>
                                <br />
                                <input type="password" value={createAccount.password2} onChange={(event: any) => {
                                    handleChange("password2", event.target.value)
                                }}/>
                            </div>
                            <div className='section'>
                                <label>Username:</label>
                                <br />
                                <input type="username" value={createAccount.username} onChange={(event: any) => {
                                    handleChange("username", event.target.value)
                                }}/>
                            </div>
                            <div className='success'>
                                {successMessage}
                            </div>
                            <div className='error'>
                                {errorMessage}
                            </div>
                            <div className='submit'>
                                <input type="submit" value="Continue" onClick={signUp} />
                            </div>
                            <div className="foot">
                                <div>
                                    Already have an account?
                                </div>
                                <div>
                                    <span className='link'><Link to="/login">Log in</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}