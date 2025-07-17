pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        PROJECTS_ROOT = '/home/jenkins/projects'
        PROJECT_NAME = 'ConsultPro'
        PROJECT_DIR = "${PROJECTS_ROOT}/${PROJECT_NAME}"
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Prepare directory') {
            steps {
                sh '''
                    echo "📂 Ensuring project root exists"
                    mkdir -p ${PROJECTS_ROOT}
                '''
            }
        }

        stage('Clone') {
            steps {
                sshagent(['github-key']) {
                    sh '''
                        echo "🧹 Removing PROJECT_DIR if it exists"
                        rm -rf ${PROJECT_DIR}

                        echo "📥 Cloning the repository directly into ${PROJECT_DIR}"
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
