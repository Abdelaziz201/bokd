import React from 'react';
import './ReportProblem.css';

const ReportProblem = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      email: form.email.value,
      issue: form.issue.value,
    };

    try {
      const response = await fetch('/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Your report has been submitted successfully!');
        form.reset();
      } else {
        alert('❌ Failed to submit your report. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('⚠️ An error occurred. Please try again later.');
    }
  };

  return (
    <div className="report-problem-page">
      <section className="report-header">
        <h1>Report a Problem</h1>
        <p>
          Found a bug or experiencing an issue with BOKD? Let us know and we’ll look into it.
        </p>
      </section>

      <section className="report-form-section">
        <form className="report-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="issue">Problem Description</label>
          <textarea
            id="issue"
            name="issue"
            rows="6"
            placeholder="Describe the issue you're experiencing..."
            required
          />

          <button type="submit">Submit Report</button>
        </form>
      </section>
    </div>
  );
};

export default ReportProblem;
