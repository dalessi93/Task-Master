import { Navbar } from "./sub-components/Navbar";
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from "react";
import { ApplicationContext } from "./context/application-context";
import { ContentSection } from "./sub-components/ContentSection";

export function AccountPage(){

    const [{currentUser}, appAction] = useContext(ApplicationContext);

    let navigate = useNavigate();

    useEffect(() => {
        if(currentUser == null){
            navigate("/")
        }
    }, [currentUser]);


    return (
        <div>
            <Navbar/>
            <ContentSection/>
        </div>
    )
}