import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import Home from './components/home';
import Nav from './reusable/Nav';
import './index.css';



const App = () => (
    <Router>
        <Nav />

        <Switch location={location} key={location.pathname}>
            <Route exact path="/">
                <Home />
            </Route>

        </Switch>
    </Router>

)
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <App />,
        document.body.appendChild(document.createElement('div')),
    )
})

