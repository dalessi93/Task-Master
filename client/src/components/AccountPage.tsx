import { Navbar } from "./sub-components/Navbar";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export function AccountPage(){
    return (
        <div className="account-page">
            <Navbar/>
            <Routes>
                <Route path="*" element={<p>Page not found! Oh NO!</p>} />
            </Routes>
        </div>
    )
}