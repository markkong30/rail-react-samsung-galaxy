import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import { useDispatch } from 'react-redux';
import { fetchPhones } from './redux/actions/fetchPhones';
import { fetchSpecs } from './redux/actions/fetchSpecs';
import Home from './components/home';
import Buy from './components/buy';
import Contact from './components/buy/contact';
import Nav from './reusable/Nav';
import Footer from './reusable/Footer';

const App = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPhones());
        dispatch(fetchSpecs())
    }, [dispatch])

    const scrollTop = () => {
        window.scrollTo({
            left: 0,
            top: 0,
        })
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         scrollTop();
    //     }, 200)
    // }, [location])

    return (
        <div className='app'>

            <Nav />
            <AnimatePresence exitBeforeEnter
                onExitComplete={scrollTop}
            >
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/buy">
                        <Buy />
                    </Route>
                    <Route path="/buy/checkout/:title/:storage">
                        <Contact />
                    </Route>

                </Switch>
            </AnimatePresence>
            <Footer />
        </div>
    )

}

export default App;