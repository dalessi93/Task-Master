import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ApplicationContext } from "../context/application-context";
import "../style/SettingsPage.css"

export function SettingsPage(){
    const [{currentUser}, appAction] = useContext(ApplicationContext);
    const navigate = useNavigate()
    const id = currentUser?.id

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [mobile, setMobile] = useState();
    
    useEffect(() => {
        axios
            .get(`/api/signup/${id}`)
            .then((response: any) => response.data)
            .then((data: any) => {
                setEmail(data.email);
                setUsername(data.username);
                setMobile(data.mobile)
            });
    }, []);

    const update = () => {
        axios
            .patch(`/api/signup/${id}`, {
                email: email,
                username: username,
                mobile: mobile, 
                id: id,
            }).then(() => navigate('/account/myJobs'))
            .catch(() => {
                alert("Something went wrong!. Please try again")
            });
    };

    return(
        <div className="settings-page">
            <div className="settings-window">
                <div className="settings-header">
                    <h1>Account Information</h1>
                </div>
                <div className="settings-body">
                    <div>
                        <label>Email:</label>
                        <br />
                        <input type="string" value={email} onChange={(event: any) => {
                            setEmail(event.target.value)
                        }}/>
                    </div>
                    
                    <div>
                        <label>Username:</label>
                        <br />
                        <input type="string" value={username} onChange={(event: any) => {
                            setUsername(event.target.value)
                        }}/>
                    </div>

                    <div>
                        <label>Mobile:</label>
                        <br />
                        <input type="string" value={mobile} onChange={(event: any) => {
                            setMobile(event.target.value)
                        }}/>
                    </div>

                </div>
                <div className="settings-footer">
                        <button onClick={update}>Submit</button>
                </div>
            </div>
        </div>
    )
}