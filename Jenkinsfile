pipeline {
    agent any

    triggers {
        githubPush() // запускается при пуше из GitHub
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
            echo "❌ Ошибка в пайплайне"
        }
        success {
            echo "✅ Проект успешно развернут"
        }
    }
}
