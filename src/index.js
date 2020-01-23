import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import 'bulma/css/bulma.css';
import './styles.scss';
import {carReducer} from './reducers/carReducer';

const store = createStore(carReducer);
console.log(store)

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, rootElement);
