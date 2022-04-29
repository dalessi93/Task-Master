import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/ModalDelete.css'


export function ModalDelete(props: any){
    let closeModal = props.closeModal;
    const postId = props.post_id;
    const navigate = useNavigate();

    const deleteEvent = () => {
        axios
            .delete(`/api/post/${postId}`)
            .then(() => {
                navigate("/account/myJobs")
                closeModal(false)
            })
            .catch(() => {
                alert('Please try again.');
            });
    };

    return(
        <div className="modalDeleteBackground">
            <div className="modalDeleteContainer">

                <div className='topCloseBtn'>
                    <button onClick={()=>{closeModal(false)}}> X </button>
                </div>

                <div className="modalTitle">
                    <h1> Are you sure you want to delete? </h1>
                </div>
                
                <div className="modalFooter">
                    <button className='modalCancelBtn' onClick={()=>{closeModal(false)}}>Cancel</button>
                    <button onClick={deleteEvent}>Delete</button>
                </div>
            </div>
        </div>
    )
}