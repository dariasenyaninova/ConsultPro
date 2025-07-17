pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        PROJECT_DIR = "${WORKSPACE}"
    }

    stages {
        stage('Train Rasa model') {
            steps {
                dir("${PROJECT_DIR}/rasa") {
                    sh '''
                        echo "🧠 Training Rasa model..."
                        rasa train --data data --config config.yml --domain domain.yml --out models
                        echo "✅ Model trained"
                        ls -la models
                    '''
                }
            }
        }

        stage('Build & Deploy') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh '''
                        echo "🧪 Verifying project directory before docker-compose"
                        ls -la

                        echo "📦 Running docker compose down"
                        docker compose down || true

                        echo "🚀 Running docker compose up --build"
                        docker compose up -d --build

                        echo "✅ Containers started successfully"
                    '''
                }
            }
        }
    }

    post {
        failure {
            echo "❌ Pipeline failed"
        }
        success {
            echo "✅ Deployment successful"
        }
    }
}
