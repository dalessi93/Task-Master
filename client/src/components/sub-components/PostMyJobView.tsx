import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../context/application-context";
import '../style/PostView.css'
import { ModalDelete } from "./ModalDelete";

export function PostMyJobView(props: any){
    const [posts, setPosts] = useState<any>()
    const [{currentUser}, appAction] = useContext(ApplicationContext);
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [deletePostId, setdeletePostId] = useState();

    const idFilter: any = props.id
    const categoryFilter: any = props.category;
    const suburbFilter: any  = props.suburb;
    const stateFilter: any  = props.state;


    useEffect(() => {
        axios
            .get('/api/post/filter', {params:{ category: categoryFilter, suburb: suburbFilter, state: stateFilter, id: idFilter}})
            .then((response: any) => response.data)
            .then((data: any) => {
                setPosts(data);
            });
    }, [categoryFilter, suburbFilter, stateFilter, idFilter]);

    
    return(
        <div className="viewpost-container">
            {openModalDelete && <ModalDelete closeModal={setOpenModalDelete} post_id={deletePostId}/>}
            {posts && posts.map((post: any) => {
                return(
                    <div className="post" key={post.post_id}>
                        <div className="ad">
                            <div className="top-post">
                                <h3>{post.title}</h3>
                                <div>{post.category}</div>
                            </div>
                            <p>{post.post}</p>
                            <span>Location: {post.suburb}, {post.state}</span>
                        </div>
                        <div className="divider"></div>
                        <div className="delete-post">
                            <button onClick={() => {setOpenModalDelete(true); setdeletePostId(post. post_id)}}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}