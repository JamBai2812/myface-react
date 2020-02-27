import React from "react";
import {MyForm} from "./CreatePostForm";


function CreatePostPage() {
    return (
        <main className="fullScreen">
            <h1>Create Post</h1>
            <MyForm/>
        </main>
    );
}

export {CreatePostPage};