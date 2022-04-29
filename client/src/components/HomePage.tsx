import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style/HomePage.css'

export function HomePage(){
    const [usePhrase, setUsePhrase] = useState("photography");
    const [useImage, setUseImage] = useState("background1");

    const phrases: any= ["photography", "moving in", "home maintenence"]
    const imgClass: any = ["background1", "background2", "background3"]

    useEffect(() => {
        const interval = setInterval(() => {
            if (usePhrase === phrases[0]){
                setUsePhrase(phrases[1]);
                setUseImage(imgClass[1]);
            } else if (usePhrase === phrases[1]) {
                setUsePhrase(phrases[2]);
                setUseImage(imgClass[2]);
            } else {
                setUsePhrase(phrases[0]);
                setUseImage(imgClass[0]);
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [usePhrase]);


    return (
        <div id="home_page">
            {/* Header */}
            <div className="top-navbar">
                <div className="logo">Task Master</div>
                <div className="menu">
                    <div className="avatar">
                        <span><Link to="/signup">Sign up</Link></span>
                        <span><Link to="/login">Log in</Link></span>
                    </div>
                </div>
            </div>
            {/* Body */}
            <div className="home-content">
                <div className="timed-message">
                    <div className="message">
                        <p>Get <span>{usePhrase}</span><br /> done.</p>
                    </div>
                    
                    <div className={useImage}></div>
                    
                </div>
                <div className="bottom">
                    <h3>Post your first task in seconds</h3>
                    <div>
                        <div><span>1</span> Login to your account</div>
                        <div><span>2</span> Describe what you need done</div>
                        <div><span>3</span> Receive quotes and pick the best person</div>
                    </div>
                </div>
            </div>
        </div>
    )
}