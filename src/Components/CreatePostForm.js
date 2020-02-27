import React, {useState} from "react";


export function MyForm(){
    
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    
    function updateMessage(event) {
        setMessage(event.target.value);
    }
    
    function handleSubmit(event){
        alert(`A message was submitted: ${message}`);
        event.preventDefault();
    }
    
    return (
      <form onSubmit={handleSubmit}>
          <label>
              What would you like to say?<br/>
              <input type="text" value={message} onChange={setMessage}/>
          </label><br/><br/>
          <label>
              Enter image URL:<br/>
              <input type="text" value={imageUrl} onChange={setImageUrl}/>
          </label><br/><br/>
          <input type="submit" value="Submit"/>
      </form>  
    );
    
    
    
    
    
    
}