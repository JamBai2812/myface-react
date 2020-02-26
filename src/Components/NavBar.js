import React from "react";
import '../SassFiles/site.scss';

function NavBar(){

    return (


        <div>
            <nav>
                <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">MyFace</a>

                <ul className="navbar-nav flex-grow-1 menu">
                    <li className="nav-item">
                        <a className="nav-link text-dark" asp-area="" asp-controller="Posts"
                           asp-action="PostsPage">Posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" asp-area="" asp-controller="Users"
                           asp-action="UsersPage">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" asp-area="" asp-controller="Home"
                           asp-action="Privacy">Privacy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" asp-area="" asp-controller="Posts"
                           asp-action="CreatePostPage">Create</a>
                    </li>
                </ul>
            </nav>
            
        </div>





    );
}

export {NavBar};
