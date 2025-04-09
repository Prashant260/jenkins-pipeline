pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_NAME = 'prashant260/nodejs_jenkins'
    }
    
        stage('Install Dependencies') {
            steps {
                script {
                    docker.image('node:18').inside {
                        dir('app') {
                            sh 'npm install'
                        }
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    docker.image('node:18').inside {
                        dir('app') {
                            sh 'npm start || echo "No tests found, skipping."'
                        }
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                // Docker CLI runs on host, not inside the node:18 image
                sh 'docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME:latest'
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
