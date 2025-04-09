# jenkins-pipeline
A simple jenkins CI/CD pipeline to test ,build and deploy the application
# Jenkins CI/CD Pipeline for Node.js App

This project demonstrates a complete CI/CD pipeline for a simple Node.js application using **Jenkins**.

## 🛠 Tech Stack

- Node.js
- Jenkins
- Docker
- GitHub

## 📁 Project Structure

jenkins-pipeline/ ├── app/ # Node.js application folder │ ├── index.js │ ├── package.json │ └── ... ├── Dockerfile └── Jenkinsfile # CI/CD pipeline definition

markdown
Copy code

## ⚙️ Jenkins Pipeline Stages

1. **Install Dependencies** – Installs Node.js modules using `npm install`
2. **Run Tests** – Runs test cases using `npm test`
3. **Build Docker Image** – Creates Docker image from the app
4. **Login to Docker Hub** – Logs into Docker Hub using Jenkins credentials
5. **Push Docker Image** – Pushes built image to Docker Hub

## 🚀 How to Run the Pipeline

1. Set up Jenkins and install required plugins:
   - Git
   - Docker
   - Pipeline
   - Credentials Binding

2. Create a new **Pipeline project** in Jenkins.

3. In the pipeline configuration, point to this GitHub repo.

4. Add Docker Hub credentials in Jenkins:
   - Go to **Manage Jenkins > Credentials**
   - Add a **Username and Password** entry with ID: `dockerhub-credentials`

5. Trigger the pipeline to build, test, and push the Docker image.

## 🐳 Docker Hub

The image is pushed to:  
`docker.io/prashant260/nodejs-app`

## 📌 Author

**Prashant Choudhary**
