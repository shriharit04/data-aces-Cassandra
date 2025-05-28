pipeline {
    agent {
        docker {image 'node:20-alpine'}
    }
    stages {

        stage("test"){
            steps{
                sh 'node --version'
            }
        }

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
