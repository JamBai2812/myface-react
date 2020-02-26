import React from "react";

function Post() {
    return (
        <li className="post">
            <div className="postContents">
                <h2>Linda</h2>
                <img className="userImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Terrier_mixed-breed_dog.jpg/220px-Terrier_mixed-breed_dog.jpg"/>
                <p>My sunset picture</p>
                <img className="postImage" src="https://upload.wikimedia.org/wikipedia/commons/9/90/Sunset_Marina.JPG" />
                <p>Date posted: </p>
                <p>Time posted: </p>
            </div>
            
        </li>
    );
}

export {Post};