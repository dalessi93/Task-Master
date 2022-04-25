import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApplicationContext } from "../context/application-context";
import '../style/PostView.css'

export function PostView(){
    const [posts, setPosts] = useState<any>()

    const [{currentUser}, appAction] = useContext(ApplicationContext);

    useEffect(() => {
        axios
            .get('/api/post')
            .then((response: any) => response.data)
            .then((data: any) => {
                setPosts(data);
            });
    }, []);

    return(
        <div className="viewpost-container">
            {posts && posts.map((post: any) => {
                return(
                    <div className="post">
                        <Link to={`jobBrowser/${post.post_id}`}>
                            <div className="top-post">
                                <h3>{post.title}</h3>
                                <div>{post.suburb}, {post.state}</div>
                            </div>
                            <p>{post.post}</p>
                            <span>{post.category}</span>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}