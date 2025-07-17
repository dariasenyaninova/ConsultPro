pipeline {
    agent any

    environment {
        PROJECT_NAME = "ConsultPro"
        PROJECT_DIR = "/home/jenkins/projects/${PROJECT_NAME}"
        COMPOSE_FILE = "${PROJECT_DIR}/docker-compose.yml"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Clean workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Clone repository') {
            steps {
                sshagent(['github-key']) {
                    checkout scm
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                dir("${env.PROJECT_DIR}") {
                    script {
                        echo "🧹Stopping old containers (if exists)..."
                        sh "docker compose -f ${COMPOSE_FILE} -p ${PROJECT_NAME} down || true"

                        echo "🚀 Build and run project..."
                        sh "docker compose -f ${COMPOSE_FILE} -p ${PROJECT_NAME} up -d --build"
                    }
                }
            }
        }
    }

    post {
        failure {
            echo "❌ Pipeline error"
        }
        success {
            echo "✅ Project build successful"
        }
    }
}
