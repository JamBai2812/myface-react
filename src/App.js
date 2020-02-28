import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import './Components/OtherSassFiles/Constants.scss';
import './Components/OtherSassFiles/ModalCreatePost.scss';
import './Components/OtherSassFiles/Hamburger.scss';
import './Components/OtherSassFiles/site.scss';

import {PostPage} from "./Components/PostPage/PostPage";
import {Footer} from "./Components/Footer/Footer";
import {NavBar} from "./Components/NavBar/NavBar";
import {IncorrectPath} from "./Components/IncorrectPath/IncorrectPath";
import {UsersPage} from "./Components/UsersPage/UsersPage";
import {CreatePostPage} from "./Components/CreatePostPage/CreatePostPage";
import {PrivacyPage} from "./Components/PrivacyPage/PrivacyPage";

function App() {
    return (
        <Router>
            <NavBar/>
            
                <Switch>
                    <Route path="/posts">
                        <PostPage/>
                    </Route>

                    <Route path="/users">
                        <UsersPage/>
                    </Route>

                    <Route path="/create">
                        <CreatePostPage/>
                    </Route>

                    <Route path="/privacy">
                        <PrivacyPage/>
                    </Route>

                    <Route path="">
                        <IncorrectPath/>
                    </Route>
                </Switch>
            
            

            <Footer/>
        </Router>
    );
}

export default App;
