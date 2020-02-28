﻿import React, {useState, useEffect} from "react";
import {Post} from "../Post/Post";
import './PostList.scss';

function PostList(props) {

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        fetch("https://localhost:5001/posts")
            .then(response => response.json())
            .then(response => setPostData(response.items))
    }, []);

    if (!postData) {
        return <div>waiting for data......</div>
    }

    return (
        <ul className="postList">
            {postData.map(post =>
                <Post data={post}/>
            )}
        </ul>
    );
}

export {PostList};