import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import { createStore } from "redux"
import { Provider } from "react-redux"
import './index.css'
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))