pipeline {
    agent any

    environment {
        PROJECT_NAME = "ConsultPro"
        PROJECT_DIR = "/home/jenkins/projects/${PROJECT_NAME}"
        GIT_REPO = "git@github.com:dariasenyaninova/ConsultPro.git"
        GIT_BRANCH = "main"
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Prepare project folder') {
            steps {
                sh "mkdir -p ${PROJECT_DIR}"
            }
        }

        stage('Clone repository') {
            steps {
                sshagent(['github-key']) {
                    dir("${PROJECT_DIR}") {
                        // клон с нужной веткой
                        git branch: "${GIT_BRANCH}",
                            url: "${GIT_REPO}"
                    }
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                dir("${PROJECT_DIR}") {
                    script {
                        echo "🧹Stopping old containers (if exists)..."
                        sh "docker compose down || true"

                        echo "🚀 Build and run project..."
                        sh "docker compose up -d --build"
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
