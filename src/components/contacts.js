import React from 'react';
import ContactForm from '../components/ContactForm'; // Adjust the path based on your folder structure

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Me</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
