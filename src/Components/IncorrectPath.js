import React from "react";
import {Link} from 'react-router-dom';

function IncorrectPath() {
    return (
        <main>
            <h1>Page Not Found</h1>
            <p className="pageDoesntExist">
                Sorry - that page doesn't exist, try these:
                <br/><br/>
                <Link to="/posts">Posts</Link>
                &emsp;
                <Link to="/users">Users</Link>
            </p>
        </main>
        
    );
}
export {IncorrectPath};