import React from 'react';
import './App.scss';
import {PostPage} from "./Components/PostPage";
import {Footer} from "./Components/Footer";
import {NavBar} from "./Components/NavBar";

function App() {
    return (
        <div>
            <NavBar/>
            <PostPage/>
            <Footer/>
        </div>
    );
}

export default App;
