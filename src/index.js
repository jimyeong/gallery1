import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import  './app/components/reset/reset.scss';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(<BrowserRouter>
                    <App/>
                </BrowserRouter>,document.getElementById("root"));