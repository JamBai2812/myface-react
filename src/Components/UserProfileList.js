import React, {useState, useEffect} from "react";
import {UserProfile} from "./UserProfile";

function UserProfileList(props) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch("https://localhost:5001/users")
            .then(response => response.json())
            .then(response => setUserData(response.items))
    }, []);

    if (!userData) {
        return <div>waiting for data......</div>
    }

    return (
        <ul className="postList">
            {userData.map(profile =>
                <UserProfile data={profile}/>
            )}
        </ul>
    );
}

export {UserProfileList};