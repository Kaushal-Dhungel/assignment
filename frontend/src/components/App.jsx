import React from 'react';
import { BrowserRouter,Redirect,Route, Switch } from "react-router-dom";
import Home from './Home';
import Leaderboard from './Leaderboard';
import AddStudent from './AddStudent';
import Navbar from './Navbar';

const App = () => {
    return (
        <>
            <BrowserRouter >
                <Navbar />
                <Switch>
                    <Route exact path = '/' component = {Home}/>
                    <Route exact path = '/leaderboard' component = {Leaderboard}/>
                    <Route exact path = '/addstudent' component = {AddStudent}/>
                    <Redirect to = "/" />

                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App;