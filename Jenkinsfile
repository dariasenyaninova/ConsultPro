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

        stage('Deploy with Docker Compose') {
            steps {
                dir("${env.WORKSPACE}") {
                    echo "🧪 Workspace: ${env.WORKSPACE}"
                    sh "ls -la"

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
