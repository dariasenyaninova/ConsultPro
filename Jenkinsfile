pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Clone') {
            steps {
                sshagent(['github-key']) {
                    checkout scm
                }
            }
        }


        stage('Build & Deploy') {
            steps {
                sh 'docker compose down || true'
                sh 'docker compose up -d --build'
            }
        }
    }

    post {
        failure {
            echo "❌ Pipeline error"
        }
        success {
            echo "✅ Deployment successful"
        }
    }
}