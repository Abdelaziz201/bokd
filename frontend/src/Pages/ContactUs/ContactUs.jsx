import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('✅ Your message has been sent successfully!');
      form.reset(); // Clear form
    } else {
      alert('❌ Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    alert('⚠️ There was an error. Please try again later.');
  }
};


  return (
    <div className="contact-us-page">
      <section className="contact-intro">
        <h1>Contact Us</h1>
        <p>
          Got a question, suggestion, or want to collaborate? We'd love to hear from you.
          Fill out the form below or reach out through our contact details.
        </p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email address" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Write your message here..." required />

          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="contact-info">
        <h2>Other Ways to Reach Us</h2>
        <p>Email: bokd.platform@gmail.com</p>
        <p>Phone: +90 555 123 4567</p>
        <p>Location: Ankara, Turkey</p>
      </section>
    </div>
  );
};

export default ContactUs;
