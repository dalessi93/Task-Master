import { Link } from 'react-router-dom'
import './dashboard.css'
import { FaUserCircle} from 'react-icons/fa'
import { RiToolsFill } from 'react-icons/ri'
import { BsBookmarkPlus } from 'react-icons/bs'

export function Navbar(){
    return (
        <div className="navbar">
            <div className="top-navbar">
                <div className="logo">Task Master</div>
                <div className="menu">
                    <div className="avatar">
                        <span><FaUserCircle/></span>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <div className="sidebar-inner">
                    <ul>
                        <li>
                            <Link to="/"><span className='icon'><BsBookmarkPlus/></span><span className='text'>My Jobs</span></Link>
                        </li>
                        <li>
                            <Link to="/"><span className='icon'><RiToolsFill/></span><span className='text'>Job Browser</span></Link>
                        </li>
                        <li>
                            <Link to="/"><span className='icon'>❔</span><span className='text'>Something</span></Link>
                        </li>
                        <li>
                            <Link to="/"><span className='icon'>❔</span><span className='text'>Something</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}