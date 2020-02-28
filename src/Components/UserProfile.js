import React from "react";

function UserProfile(props) {


    return (
        <li className="postContents">
            <div style={{"background-image": props.data.coverImageUrl}}><h2>{props.data.displayName}</h2></div>
            <img className="postImage" src={props.data.coverImageUrl} alt="Image posted."/>
            
            <img className="userImage" src={props.data.profileImageUrl} alt={props.data.displayName + " profile picture."}/>
            <p className="postMessage">{props.data.email}</p>
            <p className="userName">{props.data.username}</p>
        </li>
    );
}

export {UserProfile};