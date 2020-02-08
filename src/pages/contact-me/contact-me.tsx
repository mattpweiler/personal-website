import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import "./contact-me.css";
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    function handleSubmit() {
        if (checkFields()) {

        }
        // make api call
    }

    function checkFields() {
        return !!name && !!email && !!description;
    }

    return (
        <Grid container item className="contact-me" direction="column" justify="space-evenly" >
            <Grid item>
                <Title text="Contact Me!" />
            </Grid>
            <br />
            <br />
            <Grid item>
                <Form label="Name" placeholder="Name" onChange={setName} />
                <Form label="Email" placeholder="Email Address" onChange={setEmail} />
                <Form label="Description" placeholder="Description" onChange={setDescription} />
            </Grid>
            <Grid item xs={2}>
                <Button text="Submit" onClick={handleSubmit} disabled={checkFields()} />
            </Grid>
        </Grid>
    );
};

export default ContactMe;
