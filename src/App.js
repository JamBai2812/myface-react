import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.scss';
import './SassFiles/site.scss';
import {PostPage} from "./Components/PostPage";
import {Footer} from "./Components/Footer";
import {NavBar} from "./Components/NavBar";
import {IncorrectPath} from "./Components/IncorrectPath";
import {UsersPage} from "./Components/UsersPage";

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
                
                
                <Route path="">
                    <IncorrectPath/>
                </Route>




            </Switch>


            <Footer/>
        </Router>
    );
}

export default App;
