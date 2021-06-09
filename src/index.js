import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Tableau from './components/tableau'
import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
      <Route path="/Zabbix-Dash" component={App} />
      <Route path="/tableau" component={Tableau} />
    </BrowserRouter>,
    document.getElementById('root')
);

