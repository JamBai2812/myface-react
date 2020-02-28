import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
﻿import React, {useState, useEffect} from "react";
import {UserProfile} from "../UserProfile/UserProfile";
import "./UserProfileList.scss";


function UserProfileList() {
    const [nextPage, setNextPage] = useState("");
    const [previousPage, setPreviousPage] = useState("");
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch("https://localhost:5001/users")
            .then(response => response.json())
            .then(response => 
            {
                setUserData(response.items);
                setNextPage(response.nextPage);
                setPreviousPage(response.previousPage);
                
            })
            
    }, []);

    (console.log(nextPage));
    (console.log(previousPage));
    
    
    if (!userData) {
        return <div>waiting for data......</div>
    }
    
    function handleNextPageButtonPress(){
        if(nextPage){
            fetch("https://localhost:5001"+nextPage)
                .then(response => response.json())
                .then(response =>
                {
                    setUserData(response.items);
                    setNextPage(response.nextPage);
                    setPreviousPage(response.previousPage);

                })
        }
            
    }

    function handlePreviousPageButtonPress(){
        if(previousPage){
        fetch("https://localhost:5001"+previousPage)
            .then(response => response.json())
            .then(response =>
            {
                setUserData(response.items);
                setNextPage(response.nextPage);
                setPreviousPage(response.previousPage);

            })
        }
    }

    return (
        <div>
            <ul className="userProfileList">
                {userData.map(profile =>
                    <UserProfile data={profile}/>
                )}
            </ul>
            <button className="changePage" onClick={handlePreviousPageButtonPress}><FaArrowLeft /></button> 
            &nbsp;&nbsp;&nbsp;
            <button className="changePage" onClick={handleNextPageButtonPress}><FaArrowRight/></button>
        </div>
        
    );
}
export {UserProfileList};