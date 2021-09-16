import React from 'react';
import './App.css';
import Leads from './components/admin/Leads';
import {BrowserRouter, Route} from 'react-router-dom';
import LeadCreate from './components/admin/LeadCreate';
import LeadEdit from './components/admin/LeadEdit';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route path='/admin/leads' exact component={Leads} />
          <Route path='/admin/leads/create' exact component={LeadCreate} />
          <Route path='/admin/leads/:id/edit' exact component={LeadEdit} />
        </BrowserRouter>
    </div>
  );
}

export default App;
