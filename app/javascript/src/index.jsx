import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers/rootReducer';
import './index.css';
import App from './App';



const Index = () => {
    const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnchancer(applyMiddleware(thunk))
    )

    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>

    )

}


document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Index />,
        document.body.appendChild(document.createElement('div')),
    )
})

