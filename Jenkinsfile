pipeline {
    agent any

    triggers {
        githubPush()
    }

    environment {
        // WARNING: this path must match a volume mounted into the Jenkins container
        PROJECT_DIR = '/home/jenkins/projects/ConsultPro'
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Debug Info') {
            steps {
                echo '🧪 Checking environment before cloning'
                sh '''
                    echo "👤 Current user:"
                    whoami
                    id

                    echo "📁 Checking parent directory:"
                    ls -ld /home/jenkins/projects || true
                    ls -la /home/jenkins/projects || true

                    echo "🔍 Checking PROJECT_DIR: ${PROJECT_DIR}"
                    ls -ld "${PROJECT_DIR}" || echo "📂 PROJECT_DIR does not exist yet"
                '''
            }
        }

        stage('Clone') {
            steps {
                sshagent(['github-key']) {
                    sh '''
                        echo "🧹 Removing PROJECT_DIR if it exists"
                        rm -rf "${PROJECT_DIR}"

                        echo "📥 Cloning the repository"
                        git clone https://github.com/dariasenyaninova/ConsultPro.git "${PROJECT_DIR}"

                        echo "✅ Clone completed"
                        ls -la "${PROJECT_DIR}"
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
