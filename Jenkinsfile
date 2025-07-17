pipeline {
    agent any

    triggers {
        githubPush()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Проверка рабочей директории') {
            steps {
                sh 'echo "------------Текущий путь: $(pwd)------------"'
                sh 'ls -la'
                sh 'echo "------------Environments:------------"'
                sh 'env | sort'
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                // Переходим в тот же каталог, где Jenkins клонил исходники
                dir("${env.WORKSPACE}") {
                    echo "🧪 Workspace: ${env.WORKSPACE}"
                    sh "ls -la"  // проверка

                    echo "🧹 Stopping old containers..."
                    sh 'docker compose down || true'

                    echo "🚀 Building and starting containers..."
                    sh 'docker compose -f docker-compose.yml up -d --build'

                    echo "✅ Done"
                }
            }
        }
    }

    post {
        success { echo "✅ Pipeline succeeded" }
        failure { echo "❌ Pipeline failed" }
    }
}
