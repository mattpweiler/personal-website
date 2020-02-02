import React, { useState } from "react";
import "./contact-me.css";
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

  function handleSubmit() {
  }

  return (
    <div className="contact-me">
      <Form label="Name" placeholder="Name" onChange={setName} />
      <Form label="Email" placeholder="Email Address" onChange={setName} />
      <Form label="Description" placeholder="Description" onChange={setName} />
        <Button text="Submit" onClick={handleSubmit} />
    </div>
  );
};

export default ContactMe;
