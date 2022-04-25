import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { ApplicationContext } from '../context/application-context';
import '../style/ContentSection.css'
import { FocusPost } from './FocusPost';
import { JobBrowser } from './JobBrowser'
import { MyJobs } from './MyJobs'

export function ContentSection(){

    return(
        <div className="content-section">
            <Routes>
                <Route path="myJobs/*" element={<MyJobs />} />
                <Route path="jobBrowser/:id" element={<FocusPost />} />
                <Route path="jobBrowser" element={<JobBrowser />} />
                <Route path="*" element={<p>Page not found! Oh NO!</p>} />
            </Routes>
        </div>
    )
}