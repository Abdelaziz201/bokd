import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-page">
      <section className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to the most common questions about using BOKD.</p>
      </section>

      <section className="faq-list">
        <div className="faq-item">
          <h3>What is BOKD?</h3>
          <p>BOKD is an event management platform that helps users discover, book, and organize events and venues with ease.</p>
        </div>

        <div className="faq-item">
          <h3>Do I need an account to book tickets?</h3>
          <p>Yes, creating an account is required to book tickets and manage your bookings securely.</p>
        </div>

        <div className="faq-item">
          <h3>Can I organize an event through BOKD?</h3>
          <p>Absolutely! Organizers can register on the platform, create events, set ticket types, and manage bookings directly.</p>
        </div>

        <div className="faq-item">
          <h3>Is BOKD free to use?</h3>
          <p>Yes, signing up and browsing events is completely free. Some features for organizers may involve fees depending on usage.</p>
        </div>

        <div className="faq-item">
          <h3>How do I report an issue?</h3>
          <p>You can go to our <a href="/report-problem">Report a Problem</a> page and fill out the form to notify us.</p>
        </div>

        <div className="faq-item">
          <h3>How will I receive my tickets?</h3>
          <p>Once a booking is confirmed, you'll receive your ticket via email, and it will also be available in your BOKD account.</p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
