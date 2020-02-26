import React,{useState, useEffect} from "react";

function Post(props) {
    
    
    return (
        <li className="postContents">
            <h2>{props.data.postedBy.firstName}</h2>
            <img className="userImage"
                 src={props.data.postedBy.profileImageUrl}/>
            <p>{props.data.message}</p>
            <img className="postImage" src={props.data.imageUrl} />
            <p>Date posted: </p>
            <p>Time posted: </p>
        </li>
    );
}

export {Post};