# Kubernetes Metrics Visualizer

This project collects and visualizes basic Kubernetes metrics using a Go backend, Gin web framework, SQLite database, and a React frontend.

## Project Structure
```bash
karmada-sample-project/
├── backend/
│   ├── main.go
│   ├── handler/
│   │   └── metrics.go
│   ├── model/
│   │   └── metric.go
│   └── database/
│       └── sqlite.go
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── MetricChart.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── docker-compose.yml
└── README.md

```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshitNagpal29/karmada-sample-project.git
   cd karmada-sample-project

2. Start the Services:
   ```bash
   docker-compose up --build

3. Access the frontend at http://localhost:3000 and the backend at http://localhost:8080/metrics.