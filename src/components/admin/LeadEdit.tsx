import React, { PropsWithRef, SyntheticEvent, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Wrapper from './Wrapper';
import { Lead } from '../../interfaces/admin/lead';

const LeadEdit = (props: PropsWithRef<any>) => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[address, setAddress] = useState('');
    const[cellphone, setCellphone] = useState('');
    const[redirect, setRedirect] = useState(false);

    useEffect(() =>{
        (
            async () => {
                const response = await fetch(`http://localhost:8000/api/leads/${props.match.params.id}`);
                const lead: Lead = await response.json();
                setFirstName(lead.first_name);
                setLastName(lead.last_name);
                setAddress(lead.address);
                setCellphone(lead.cellphone);
            }
        )();
    }, []);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch(`http://localhost:8000/api/leads/${props.match.params.id}`, {
            method: "PUT",
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
                    <input type="text" className="form-control" name="first"
                        defaultValue={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="last"
                        defaultValue={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address"
                        defaultValue={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <div className = "form-group">
                    <label>Cellphone</label>
                    <input type="text" className="form-control" name="cellphone"
                        defaultValue={cellphone}
                        onChange={e => setCellphone(e.target.value)}
                    />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    )
}

export default LeadEdit;