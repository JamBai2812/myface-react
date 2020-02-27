import React from "react";
import moment from "moment";

function Post(props) {

    const postDateTime = moment(props.data.postedAt);
    const postDate = postDateTime.format("ddd Do MMM YYYY");
    const postTime = postDateTime.format("h:mm a");


    return (
        <li className="postContents">
            <h2>{props.data.postedBy.firstName}</h2>
            <img className="userImage" src={props.data.postedBy.profileImageUrl} alt={props.data.postedBy.displayName + " profile picture."}/>
            <p className="postMessage">{props.data.message}</p>
            <img className="postImage" src={props.data.imageUrl} alt="Image posted."/>
            <p className="dateTimePosted"><b>Posted:</b> {postDate}<br/>
            at &nbsp;{postTime}
            </p>
            <p className="likesDislikes"><b>Likes:</b> {props.data.likes.length} &emsp; <b>Dislikes:</b> {props.data.dislikes.length}</p>
        </li>
    );
}

export {Post};