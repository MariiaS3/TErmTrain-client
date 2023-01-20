import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk'
import App from  "./component/App"
import reducers from "./module/index"

const createStoreWithMiddelware = applyMiddleware(reduxThunk)(createStore)




ReactDOM.render(
        <Provider store={createStoreWithMiddelware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <App />
        </Provider>
        , document.getElementById('root'));
