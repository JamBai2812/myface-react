import React from "react";

function UserProfile(props) {

    const divStyle = 
        {
                        'width': '100%',
                        'background-image': 'url(' + props.data.coverImageUrl + ')',
                        'background-size': "cover",
                        'border-radius': '5%'
        };



    return (
        <li className="userProfileContents">
            <div style={divStyle}>
                <h2 className="userProfileName">{props.data.displayName}<br/></h2>
                <img className="userImage" src={props.data.profileImageUrl}
                     alt={props.data.displayName + " profile picture."}/>
            </div>
            <p className="userProfileUsername"><b>Username:</b> {props.data.username}</p>
            <p className="userProfileEmail"><b>Email:</b> {props.data.email}</p>
            
        </li>
    );
}

export {UserProfile};