pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'docker compose up'
                // Replace with your docker build or app build step
                // sh 'docker-compose build' or 'docker build -t app .'
            }
        }
    }
}
