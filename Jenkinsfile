pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        DB_CREDS = credentials('pg-user-pass') // Jenkins credentials ID
    }


    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Prepare ENV') {
            steps {
                sh '''
                echo "POSTGRES_USER=$DB_CREDS_USR" > .env
                echo "POSTGRES_PASSWORD=$DB_CREDS_PSW" >> .env
                echo "POSTGRES_DB=consult_db" >> .env
                echo "DB_PORT=5432" >> .env
                '''
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
