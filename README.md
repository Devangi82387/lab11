# Mini CI/CD Pipeline with Monitoring

**Author:** Pansuriya Devangi Rasikbhai  
**Tech Stack:** Node.js, Docker, GitHub Actions, Prometheus, Grafana  

---

## Summary
This project demonstrates a **Mini CI/CD Pipeline** integrated with **monitoring**.  
It includes an automated GitHub Actions workflow for building, testing, and deploying a Node.js backend to Docker Hub, along with a Prometheus + Grafana setup for system monitoring.

---

## Project Structure

├─ backend/
│ ├─ package.json
│ ├─ server.js
│ ├─ Dockerfile
│ └─ test/
│ └─ test-basic.js
├─ .github/
│ └─ workflows/
│ └─ ci-cd.yml
├─ docker-compose.yml
├─ docker-compose.monitoring.yml
├─ prometheus/
│ └─ prometheus.yml
└─ README.md

## Steps Performed

1. **Developed a Node.js backend**
   - Added `/status` and `/metrics` endpoints for health and Prometheus data.
2. **Containerized the backend** using Docker.
3. **Created a CI/CD pipeline** with GitHub Actions:
   - Install dependencies  
   - Run tests  
   - Build Docker image  
   - Push to Docker Hub
4. **Deployed Monitoring Stack:**
   - **Prometheus** scrapes metrics from `/metrics`
   - **Grafana** visualizes application metrics in real-time

---

## CI/CD Flow

- Triggered on **every push or pull request** to the `main` branch  
- Steps performed in pipeline:
  1. Checkout repository  
  2. Set up Node environment  
  3. Install backend dependencies  
  4. Run tests  
  5. Build Docker image  
  6. Push Docker image to Docker Hub  

**Workflow file:** `.github/workflows/ci-cd.yml`

---

## Monitoring Setup

- **Prometheus** configured to scrape `/metrics` endpoint every **5 seconds**
- **Grafana** connected to Prometheus as a data source for visualization
- Run both services via Docker Compose

### Run Monitoring Stack
```bash
docker-compose -f docker-compose.monitoring.yml up -d
Access URLs
Backend API: http://localhost:3000/status

Prometheus: http://localhost:9090

Grafana: http://localhost:3000

Conclusion

This mini project successfully integrates CI/CD automation and real-time monitoring, demonstrating a complete DevOps workflow — from code push to deployment and visualization.