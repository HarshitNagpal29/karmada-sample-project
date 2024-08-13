import React from 'react';
import { Line } from 'react-chartjs-2';

function MetricChart({ metrics }) {
  const data = {
    labels: metrics.map(metric => metric.timestamp),
    datasets: [
      {
        label: 'Metric Value',
        data: metrics.map(metric => metric.value),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
}

export default MetricChart;
