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
                    sh """
                        rm -rf ${PROJECT_DIR} && \
                        git clone https://github.com/dariasenyaninova/ConsultPro.git ${PROJECT_DIR}
                    """
                }
            }
        }

        stage('Build & Deploy') {
            steps {
                dir("${PROJECT_DIR}") {
                    sh 'docker compose down || true'
                    sh 'docker compose up -d --build'
                }
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