import { Link } from "react-router-dom";
import './style/HomePage.css'

export function HomePage(){
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
                <p>HERE I WILL PLACE SOME TYPE OF AD/IMAGE</p>
            </div>
        </div>
    )
}