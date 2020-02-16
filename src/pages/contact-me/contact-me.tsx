import React, { useState } from "react";
import Grid from '@material-ui/core/Grid/Grid';
import "./contact-me.css";
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import sendEmail from '../../services/contact-me/contact-me';
import ErrorBanner from '../../components/ErrorBanner/ErrorBanner';
import ConfirmBanner from '../../components/ConfirmBanner/ConfirmBanner';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [showError, setShowError] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    async function handleSubmit() {
        if (checkFields()) {
            // await sendEmail(name, email, description);
            setShowError(false);
            setShowConfirm(true);
        } else {
            setShowError(true);
            setShowConfirm(false);
        }
    }

    function checkFields() {
        return !!name && !!email && !!description;
    }

    return (
        <Grid container item className="contact-me" direction="column" >
            <Grid item>
                <Title text="Contact Me!" />
            </Grid>
            <br />
            <ErrorBanner title="Error" subtext="Form is currently unavailable. Please send me an email: mattweilerbusiness@gmail.com"/>
            <Grid item>
            <br />
            {showError && <ErrorBanner title="Submission Error" subtext="Please fill out entire form"/>}
            {false && <ConfirmBanner title="Thanks" subtext="I'll get back to you as soon as I can."/>}
                <br />
                <Form label="Name" placeholder="Name" onChange={setName} />
                <Form label="Email" placeholder="Email Address" onChange={setEmail} />
                <Form label="Description" placeholder="Description" onChange={setDescription} />
            </Grid>
            <Grid item xs={2}>
                <Button text="Submit" onClick={handleSubmit} />
            </Grid>
            <Grid item>
                EMAIL: mattweilerbusiness@gmail.com
            </Grid>
            <Grid item>
                GITHUB: https://github.com/mattpweiler/Personal-Website
            </Grid>
            <Grid item>
                PHONE: (414) 213-2302
            </Grid>
        </Grid>
    );
};

export default ContactMe;
