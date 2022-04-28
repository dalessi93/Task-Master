import { useContext, useState } from "react";
import { ApplicationContext } from "../context/application-context";
import { Modal } from "./Modal";
import { PostMyJobView } from "./PostMyJobView";

export function MyJobs(){

    const [{currentUser}, appAction] = useContext(ApplicationContext);

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