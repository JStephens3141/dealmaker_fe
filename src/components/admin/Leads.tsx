import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Lead } from '../../interfaces/admin/lead';
import Wrapper from './Wrapper';


const Leads = () => {
    const[leads, setLeads] = useState([]);


    useEffect(() => {
        (
          async () => {
            const response = await fetch('http://localhost:8000/api/leads');
            const data = await response.json();
            setLeads(data);
          }
         )();
    }, []);

    const del = async (id: number) => {
      if(window.confirm('Are you sure you want to delete this Lead?'))
      await fetch(`http://localhost:8000/api/leads/${id}`, {
        method: 'DELETE'
      });
      setLeads(leads.filter((l: Lead) => l.id !== id));
    } 


    return (
      <Wrapper>
        <div className="pt-3 pb-2 mb-3 border-bottom">
          <div className="btn-toolbar mb-2 mb-md-8">
            <Link to="/admin/leads/create" className="btn btn-sm btn-outline-secondary">Add</Link>
          </div>
        </div>
        <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Properties Shown</th>
                    <th scope="col">Current Region</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map(
                      (l: Lead) => {
                      return(
                        <tr key={l.id}>
                          <td>{l.id}</td>
                          <td>{l.first_name} {l.last_name}</td>
                          <td>{l.propertiesShown}</td>
                          <td>{l.address}</td>
                          <td>{l.cellphone}</td>
                          <td>Placeholder Image</td>
                          <td>
                            <div className="btn-group mr-2">
                              <Link to={`/admin/leads/${l.id}/edit`} 
                                className="btn btn-sm btn-outline-secondary">Edit</Link>
                              <a href="#" className="btn btn-sm btn-outline-secondary"
                                onClick={() =>del(l.id)}
                              >Delete</a>
                            </div>
                          </td>
                      </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
      </Wrapper>
    );
};

export default Leads;