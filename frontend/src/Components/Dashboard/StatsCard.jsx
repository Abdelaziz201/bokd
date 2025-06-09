// =====================
// StatsCard.jsx
// =====================

import React from 'react';
import { Pie } from 'react-chartjs-2';

// This component shows a chart of published vs draft events
const StatsCard = ({ totalEvents, publishedEvents }) => {
  // Setup chart data
  const chartData = {
    labels: ['Published', 'Drafts'], // Chart labels
    datasets: [
      {
        data: [publishedEvents, totalEvents - publishedEvents], // Values for the pie
        backgroundColor: ['#28a745', '#ffc107'] // Colors: green and yellow
      }
    ]
  };

  return (
    <div className="stat-card">
      {/* Event counts */}
      <div className="stat-text">
        <h3>Total Events</h3>
        <p>📅 {totalEvents}</p>
        <span>{publishedEvents} published</span>
      </div>

      {/* Pie chart */}
      <div className="chart-container">
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default StatsCard;
