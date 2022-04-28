import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { idText } from 'typescript';
import { ApplicationContext } from '../context/application-context';
import '../style/Modal.css'
import {categoryArray, suburbArray, stateArray} from './PostFilter'

export function Modal(props: any){
    let closeModal = props.closeModal;
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const [title, setTitle] = useState();
    const [post, setPost] = useState();
    const [suburb, setSuburb] = useState<any>();
    const [state, setState] = useState<any>();
    const [category, setCategory] = useState<any>();
    const completed = false;
    const user_id = props.id;

    const createPost = () => {
        if(title === undefined || post === undefined || suburb === undefined || state === undefined || category === undefined || user_id === undefined){
            setErrorMessage("error");
        } else {
            axios.post("/api/post", {
                title: title,
                post: post, 
                suburb: suburb,
                state: state,
                completed: completed,
                user_id: user_id,
                category: category
            }).then((response: any) => response.data).then((data: any) => {
                console.log("post created")
                navigate("/account/myJobs")
                closeModal(false)
                
               
            })
        }
    }

    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div className='topCloseBtn'>
                    <div className='error'>
                        {errorMessage}
                    </div>
                    <button onClick={()=>{closeModal(false)}}> X </button>
                </div>
                <div className="modalTitle">
                    <h1> New Job </h1>
                </div>
                <div className="modalBody">
                        <div className='title'>
                            <label>Title:</label>
                            <br />
                            <input type="string" value={title} onChange={(event: any) => {
                                setTitle(event.target.value)
                            }}/>
                        </div>
                        <div className='description'>
                            <label>Job description:</label>
                            <br />
                            <textarea value={post} onChange={(event: any) => {
                                setPost(event.target.value)
                            }}/>
                        </div>
                        <div className='modalFilter'>
                            {/* Category Filter */}
                            <Autocomplete className='filter'
                                value={category}
                                onChange={(event: any, newValue: string | null) => {
                                setCategory(newValue);
                                }}
            
                                id="controllable-states-demo"
                                options={categoryArray}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Category" />}
                            />
                            {/* Suburb Filter */}
                            <Autocomplete
                                value={suburb}
                                onChange={(event: any, newValue: string | null) => {
                                setSuburb(newValue);
                                }}
            
                                id="controllable-states-demo"
                                options={suburbArray}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="Suburb" />}
                            />
                            {/* State Filter */}
                            <Autocomplete
                                value={state}
                                onChange={(event: any, newValue: string | null) => {
                                setState(newValue);
                                }}
            
                                id="controllable-states-demo"
                                options={stateArray}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="State" />}
                            />
                        </div>
                </div>
                <div className="modalFooter">
                    <button className='modalCancelBtn' onClick={()=>{closeModal(false)}}>Cancel</button>
                    <button onClick={createPost}>Post</button>
                </div>
            </div>
        </div>
    )
}