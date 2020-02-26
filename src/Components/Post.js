import React, {useState, useEffect} from "react";

function Post() {

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
                <li>
                    <h2>{post.postedBy.firstName}</h2>
                    <img className="userImage"
                         src={post.postedBy.profileImageUrl}/>
                    <p>{post.message}</p>
                    <img className="postImage" src={post.imageUrl} />
                    <p>Date posted: {}</p>
                    <p>Time posted: </p>
                </li>
            )}
            

            

        </ul>


    );


}

export {Post};