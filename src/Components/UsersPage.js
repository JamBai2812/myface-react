import React from "react";
import {UserProfileList} from "./UserProfileList";

function UsersPage() {
    return (
        <main>
            <h1>
                Users
            </h1>
            <UserProfileList/>
        </main>
    );
}

export {UsersPage};