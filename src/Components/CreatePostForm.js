import React, {useState} from "react";
import {Redirect} from 'react-router';


export function MyForm(){
    
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [userId, setUserId] = useState("");
    
    function updateMessage(event) {
        setMessage(event.target.value);
    }
    function updateImageUrl(event) {
        setImageUrl(event.target.value);
    }
    function updateUserId(event) {
        setUserId(event.target.value);
    }
    
    function handleSubmit(event){
        alert('A new post was created');
            fetch("https://localhost:5001/posts/create", {
                method: 'POST',
                body: {
                    'message': message,
                    'userId': userId,
                    'imageUrl': imageUrl
                }
            })
                .then(<Redirect to="/posts"/>);
        
        event.preventDefault();
    }
    
    return (
      <form onSubmit={handleSubmit}>
          <label>
              What would you like to say?<br/>
          </label>    
          <textarea name="Message" id="Message" value={message} onChange={updateMessage}/>
          <br/><br/>
          <label>
              Enter image URL:<br/>
              <input name="ImageUrl" type="text" value={imageUrl} onChange={updateImageUrl}/>
          </label><br/><br/>
          <label>
              Enter User ID:<br/>
              <input name="UserId" type="text" value={userId} onChange={updateUserId}/>
          </label><br/><br/>
          
          <input type="submit" value="Submit"/>
      </form>  
    );
}