import React from "react";
function NavBar(){

    return (

            <nav>
                <a className="logo" asp-area="" asp-controller="Home" asp-action="Index">MyFace</a>

                <ul className="menu">
                    <li className="nav-item">
                        <a className="nav-link" asp-area="" asp-controller="Posts"
                           asp-action="PostsPage">Posts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" asp-area="" asp-controller="Users"
                           asp-action="UsersPage">Users</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" asp-area="" asp-controller="Home"
                           asp-action="Privacy">Privacy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" asp-area="" asp-controller="Posts"
                           asp-action="CreatePostPage">Create</a>
                    </li>
                </ul>
            </nav>
    );
}

export {NavBar};
