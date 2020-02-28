import {Link} from "react-router-dom";

﻿import React, {useState} from "react";
import {UserProfileList} from "../UserProfileList/UserProfileList";

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