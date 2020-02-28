﻿import React from "react";
import {Link} from 'react-router-dom';
import './PageNotFound.scss';

function IncorrectPath() {
    return (
        <main className="fullScreen">
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