# 🚀 Node.js App with Docker & CI/CD on AWS EC2

This is a Node.js web application that returns a response. It is containerized using Docker and automatically deployed to an AWS EC2 instance using GitHub Actions.

---

## 📁 Project Structure

simple-node-app/
├── app.js # Node.js web server
├── package.json # Node.js project config
├── Dockerfile # Docker container definition
└── .github/
└── workflows/
└── ec2-deploy.yml # GitHub Actions workflow for CI/CD

---

## 🔧 Prerequisites

### ✅ AWS EC2 Instance

- Ubuntu 20.04 or 22.04
- Docker installed:
  ```bash
  sudo apt update
  sudo apt install -y docker.io
  sudo usermod -aG docker ubuntu
Security Group with:

Port 22 open (for SSH)

Port 80 open (for HTTP)

🚀 Running Locally with Docker
bash
Copy
Edit
docker build -t simple-node-app .
docker run -p 3000:3000 simple-node-app
Visit: http://localhost:3000

⚙️ CI/CD with GitHub Actions
Every push to the main branch triggers:

SSH into your EC2 instance

Uploads latest code

Builds Docker image

Runs it on port 80

🔑 GitHub Repository Secrets
Add these in Settings → Secrets and variables → Actions:

Name	Description
EC2_HOST	Your EC2 public IP address
EC2_USER	EC2 username (usually ubuntu)
EC2_KEY	Content of your EC2 .pem SSH key

🌐 Access the App
After deployment, visit:

bash
http://<your-ec2-ip>

You should see:
<img width="937" alt="image" src="https://github.com/user-attachments/assets/05c2a4ce-a82d-4dca-a6a4-f207f5161dd6" />

📦 Future Improvements
Add HTTPS with Nginx + Let's Encrypt

Add CI tests before deployment

Use Docker Compose for multi-container setup

Configure monitoring or alerts

🛠 Built With
Node.js

Docker

GitHub Actions

AWS EC2

📄 License
This project is open-source and available under the MIT License.
