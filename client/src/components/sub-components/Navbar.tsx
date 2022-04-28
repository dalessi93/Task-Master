import { Link, useNavigate } from 'react-router-dom'
import '../style/Navbar.css'
import { FaUserCircle} from 'react-icons/fa'
import { RiToolsFill } from 'react-icons/ri'
import { BsBookmarkPlus } from 'react-icons/bs'
import { IoIosLogOut } from "react-icons/io";
import axios from 'axios'
import { useContext, useEffect } from 'react'
import { ActionType, ApplicationContext } from '../context/application-context'

export function Navbar(){
    const [appState, appAction] = useContext(ApplicationContext);

    const navigate = useNavigate();

    //Log out

    useEffect(() => {
        if(appState.currentUser == null){
            navigate("/")
        }
    }, [appState.currentUser]);

    const logout = () => {
        axios
            .delete('/api/session/').then((response) => {
            const user = response.data.email;
            appAction({
                type: ActionType.LOGOUT,
            });
        });
    }

    return (
        <div className="navbar">
            <div className="top-navbar">
                <div className="logo">Task Master</div>
                <div className="menu">
                    <div className="avatar">
                        <span><Link to="settings"><FaUserCircle/></Link></span>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="sidebar-inner">
                    <ul>
                        <li>
                            <Link to="myJobs"><span className='icon'><BsBookmarkPlus/></span><span className='text'>My Jobs</span></Link>
                        </li>
                        <li>
                            <Link to="jobBrowser"><span className='icon'><RiToolsFill/></span><span className='text'>Job Browser</span></Link>
                        </li>
                        <li>
                            <Link to="jobBrowser/1"><span className='icon'>❔</span><span className='text'>Something</span></Link>
                        </li>
                        <li>
                            <Link to="/"><span className='icon'>❔</span><span className='text'>Something</span></Link>
                        </li>
                        
                    </ul>
                    <div className='logout' onClick={logout}><span className='icon'><IoIosLogOut/></span><span className='text'>Log out</span></div>
                </div>
            </div>
        </div>
    )
}