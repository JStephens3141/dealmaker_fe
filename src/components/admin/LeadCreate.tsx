import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router';
import Wrapper from './Wrapper';

const LeadCreate = () => {
    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[address, setAddress] = useState('')
    const[cellphone, setCellphone] = useState('')
    const[redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch("http://localhost:8000/api/leads", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                address,
                cellphone,
                propertiesShown: 0
            })
        });
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to="/admin/leads" />
    }

    return(
        <Wrapper>
            <form onSubmit={submit}>
                <div className = "form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" name="title"
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="title"
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="title"
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <label>Cellphone</label>
                    <input type="text" className="form-control" name="title"
                        onChange={e => setCellphone(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    )
}

export default LeadCreate;