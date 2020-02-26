import React from "react";
import {Post} from "./Post";

function PostList() {

    const postList = [];
        for(let i = 0; i<5; i++){
            
            postList.push(<Post/>);
        }
    
    
    return (
        <ul className="postList">
            {postList}
        </ul>
    );
}

export {PostList};