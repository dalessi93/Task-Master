import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { ApplicationContext } from "../context/application-context";

export function SettingsPage(){
    const [{currentUser}, appAction] = useContext(ApplicationContext);

    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [mobile, setMobile] = useState();

    useEffect(() => {
        axios
            .get(`/api/signup/${currentUser?.id}`)
            .then((response: any) => response.data)
            .then((data: any) => {
                console.log(data);
            });
    }, []);

    return(
        <div className="settings-page">
            <div className="settings-window">
                <div className="settings-header">
                    <h1>Settings</h1>
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

                </div>
            </div>
        </div>
    )
}