import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import Home from './components/home';
import './index.css';



const App = () => (
    <Router>
        <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => window.scrollTo({
                left: 0,
                top: 0,
            })}
        >
            <Switch location={location} key={location.pathname}>
                <Route exact path="/">
                    <Home />
                </Route>

            </Switch>
        </AnimatePresence>
    </Router>

)
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Home />,
        document.body.appendChild(document.createElement('div')),
    )
})

