import React, { useState, useEffect } from 'react';
import MetricChart from './components/MetricChart';

function App() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetch('/api/metrics')
      .then(response => response.json())
      .then(data => setMetrics(data));
  }, []);

  return (
    <div className="App">
      <h1>Kubernetes Metrics</h1>
      <MetricChart metrics={metrics} />
    </div>
  );
}

export default App;
