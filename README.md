# Discover Croatia

🌍 Discover Croatia is a modern, interactive website designed to showcase the history, culture, and beauty of Croatia. This project combines cutting-edge technologies with intuitive design to provide an engaging and informative user experience.

## Features

- Dynamic Content: Explore various aspects of Croatia, including history, culture, cuisine, and more.
- Responsive Design: Fully responsive interface built with React.js, ensuring a seamless experience across devices.
- Scalable Backend: Robust backend powered by Express.js, delivering fast and efficient API performance.
- Containerized Deployment: Developed using Docker for consistent environments and deployed with Kubernetes for scalability.

## Tech Stack

- Frontend: React.js
- Backend: Express.js (Node.js)
- Containerization: Docker
- Orchestration: Kubernetes

## Installation

### Prerequisites

- Docker
- Kubernetes (minikube or any Kubernetes cluster)
- Node.js and npm

### Steps

1. Clone the repository:

```bash
git clone https://github.com/sean-s14/discover-croatia.git
cd country-explorer
```

2. Install dependencies:

```bash
cd frontend
npm install
cd ../backend
npm install
```

3. Build Docker images:

```bash
docker build -t country-explorer-frontend ./frontend
docker build -t country-explorer-backend ./backend
```

4. Deploy to Kubernetes:

Apply the Kubernetes manifests to your cluster:

```bash
kubectl apply -f k8s/
```

5. Access the application:
   Use your Kubernetes service to access the website. If using minikube, run:

```bash
minikube service country-explorer-frontend
```

---

## License

This repository is licensed under a custom license. You are permitted to read and view the code for personal, educational, and reference purposes only.
For more details, see the LICENSE file.

## Contributing

Contributions are not currently accepted as this is a closed project.

## Contact

If you have any questions or feedback, feel free to reach out:

Email: sean.stocker15@gmail.com\
GitHub: sean-s14

---

Let me know if you'd like to adjust any sections or add more details!
