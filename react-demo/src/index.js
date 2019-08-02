import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import './mock';
import UserAdd from './pages/UserAdd';
import main from './pages/main';
import store from './store'
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>
            <Route exact path="/user/add" component={UserAdd}/>
            <Route exact path="/" component={main}/>
        </div>
    </Router>
    </Provider>
, document.getElementById('root')
);
