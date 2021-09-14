import React from 'react';
import './App.css';
import Leads from './components/admin/Leads';
import Wrapper from './components/admin/Wrapper'
import {BrowserRouter, Route} from 'react-router-dom';
import LeadCreate from './components/admin/LeadCreate';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route path='/admin/leads' exact component={Leads} />
          <Route path='/admin/leads/create' exact component={LeadCreate} />
        </BrowserRouter>
    </div>
  );
}

export default App;
