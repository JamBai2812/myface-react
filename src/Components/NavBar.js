import React from "react";
import {Link} from 'react-router-dom';
function NavBar(){

    return (

            <nav>
                <Link className="logo" to="/posts">MyFace</Link>

                <ul className="menu">
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts">Posts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/privacy">Privacy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">Create</Link>
                    </li>
                </ul>
            </nav>
    );
}

export {NavBar};
