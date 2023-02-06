import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk'
import App from  "./component/App"
import reducers from "./module/index"


//create a store instance
//The only way to update the state is to call store.dispatch() and pass in an action object.
//The store will run its reducer function and save the new state value inside.
const createStoreWithMiddelware = applyMiddleware(reduxThunk)(createStore)


ReactDOM.render(
        <Provider store={createStoreWithMiddelware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
            <App />
        </Provider>
        , document.getElementById('root'));
