﻿import React from "react";
import moment from "moment";
import './Post.scss';

function Post(props) {

    const postDateTime = moment(props.data.postedAt);
    const postDate = postDateTime.format("ddd Do MMM YYYY");
    const postTime = postDateTime.format("h:mm a");
    
    
    
    function openModal(){
        const modal = document.getElementById(props.data.imageUrl +"modal");
        modal.style.display = "block";
    }
    
    function closeModal(){
        const modal = document.getElementById(props.data.imageUrl +"modal");
        modal.style.display = "none";
    }
    
    
    return (
        <li className="postContents">
            <h2 className="postedBy">{props.data.postedBy.firstName}</h2>
            <img className="userImage" src={props.data.postedBy.profileImageUrl} alt={props.data.postedBy.displayName + " profile picture."}/>
            <p className="postMessage">{props.data.message}</p>
            <img onClick={openModal} id={props.data.imageUrl} className="postImage" src={props.data.imageUrl} alt="Image posted."/>
            <p className="dateTimePosted"><b>Posted:</b> {postDate}<br/>
            at &nbsp;{postTime}
            </p>
            <p className="likesDislikes"><b>Likes:</b> {props.data.likes.length} &emsp; <b>Dislikes:</b> {props.data.dislikes.length}</p>
            <div id={props.data.imageUrl +"modal"} className="modal">
                <span onClick={closeModal} className="close">&times;</span>
                <img id={props.data.imageUrl +"imgModal"} className="modalImage" src={props.data.imageUrl}/>
                <div className="caption" id={props.data.message}>{props.data.message}</div>
            </div>
        </li>
    );
}

export {Post};