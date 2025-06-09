
import React from 'react'
import './ReportVenue.css';

const ReportVenue = () => {
    const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      email: form.email.value,
      name: form.name.value,
      issue: form.issue.value,
    };

    try {
      const response = await fetch('/api/report-venue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Your venue report has been submitted successfully!');
        form.reset();
      } else {
        alert('❌ Failed to submit venue report. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting venue report:', error);
      alert('⚠️ An error occurred. Please try again later.');
    }
  };
  
    return (
      <div class="report-venue-page">
        <section class="report-venue-header">
          <h1 class="rvh1">Report a Venue</h1>
          <p>
            Had some issues with a venue? Let us know and we’ll look into it.
            Your feedback is important to us!
          </p>
        </section>
  
        <section class="report-venue-form-section">
          <form class="report-venue-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="email">Venue Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Venue's Name"
              required
            />
  
            <label htmlFor="issue">Problem Description</label>
            <textarea
              id="issue"
              name="issue"
              rows="6"
              placeholder="Describe the issue with the venue..."
              required
            />
  
            <button class="vsub-btn" type="submit">Submit Report</button>
          </form>
        </section>
      </div>
    );
  };
  
  export default ReportVenue;