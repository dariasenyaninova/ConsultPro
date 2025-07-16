pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        PROJECT_DIR = '/home/jenkins/projects/ConsultPro'
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Clone') {
            steps {
                sshagent(['github-key']) {
                    sh '''
                        echo "🧹 Removing PROJECT_DIR if it exists"
                        rm -rf ${PROJECT_DIR}

                        echo "📥 Cloning the repository"
                        git clone https://github.com/dariasenyaninova/ConsultPro.git ${PROJECT_DIR}

                        echo "✅ Clone completed"
                        ls -la ${PROJECT_DIR}
                    '''
                }
            }
        }

        stage('Train Rasa model') {
            steps {
                dir("${PROJECT_DIR}/rasa") {
                    sh """
                        echo "🧠 Training Rasa model inside Docker..."
                        docker run --rm \\
                            -v \$(pwd):/app \\
                            -u 999:999 \\
                            rasa/rasa:3.6.10 \\
                            train --data /app/data --config /app/config.yml --domain /app/domain.yml --out /app/models
                    """
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
