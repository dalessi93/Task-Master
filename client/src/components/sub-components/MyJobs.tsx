import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ApplicationContext } from "../context/application-context";
import { Modal } from "./Modal";
import { PostMyJobView } from "./PostMyJobView";
import '../style/MyJobs.css'

export function MyJobs(){

    const [{currentUser}, appAction] = useContext(ApplicationContext);
    let navigate = useNavigate();

    useEffect(() => {
        if(currentUser == null){
            navigate("/")
        }
    }, [currentUser]);

    const [openModal, setOpenModal] = useState(false)
    

    return(
        <div>
            {openModal && <Modal closeModal={setOpenModal} id={currentUser?.id}/>}
            <div className="filterpost-container">
                <button className="openModal" onClick={() => {setOpenModal(true)}}>New</button>
            </div>
            <PostMyJobView id={currentUser?.id}/>
        </div>
    )
}