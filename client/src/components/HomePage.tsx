import { Link } from "react-router-dom";

export function HomePage(){
    return (
        <div id="home_page">
            <div>
                <h1>Task Master</h1>
                <div>
                    <Link to="signup">Sign up</Link>
                    <Link to="login">Log in</Link>
                </div>
            </div>
            <div>
                <p>HERE I WILL PLACE SOME TYPE OF AD/IMAGE</p>
            </div>
        </div>
    )
}