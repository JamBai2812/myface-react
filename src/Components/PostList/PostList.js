﻿import React, {useState, useEffect} from "react";
import {Post} from "../Post/Post";
import './PostList.scss';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

function PostList(props) {

    const [postData, setPostData] = useState(null);
    const [nextPage, setNextPage] = useState("");
    const [previousPage, setPreviousPage] = useState("");

    useEffect(() => {
        fetch("https://localhost:5001/posts")
            .then(response => response.json())
            .then(response => setPostData(response.items))
    }, []);

    if (!postData) {
        return <div>waiting for data......</div>
    }

    function handleNextPageButtonPress(){
        if(nextPage){
            fetch("https://localhost:5001"+nextPage)
                .then(response => response.json())
                .then(response =>
                {
                    setPostData(response.items);
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
                    setPostData(response.items);
                    setNextPage(response.nextPage);
                    setPreviousPage(response.previousPage);

                })
        }
    }


    return (
        <div>
            <ul className="postList">
                {postData.map(post =>
                    <Post data={post}/>
                )}
            </ul>
            <button className="changePage" onClick={handlePreviousPageButtonPress}><FaArrowLeft /></button>
            &nbsp;&nbsp;&nbsp;
            <button className="changePage" onClick={handleNextPageButtonPress}><FaArrowRight/></button> 
            
        </div>
       
        
    );
}

export {PostList};