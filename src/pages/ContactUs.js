import React, { useState } from 'react';
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com'; 
import '../App.css'; // Adjust the import based on your CSS structure
import LandingNav from '../components/LandingNav';
import ToastNotification from '../components/ToastNotification';

// Initialize EmailJS with your User ID
init('uPlXIivG8XVPFQkkL');

const ContactUs = () => {
  const [toastMessage, setToastMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData); // Log the form data

    emailjs.send('service_n3ste0w', 'template_6gq557u', formData)
        .then((response) => {
            console.log('Email sent successfully!', response);
            setToastMessage('Email sent successfully!');
            setTimeout(() => {
                setToastMessage('');
              }, "3000");
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            setToastMessage('Failed to send your message. Please try again.');
            setTimeout(() => {
                setToastMessage('');
              }, "3000");
        });
};


  return (
    <div className='contact-container'>
      <ToastNotification toastMessage={toastMessage} />
      <LandingNav />
      <div className='contact-form'>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us using the information below.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name:</label><br />
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          /><br />

          <label htmlFor='email'>Email:</label><br />
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          /><br />

          <label htmlFor='message'>Message:</label><br />
          <textarea
            id='message'
            name='message'
            rows='4'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea><br />

          <button className='primary-btn' type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
