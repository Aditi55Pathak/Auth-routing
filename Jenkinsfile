pipeline {
    agent any

    environment {
        // Assuming Node.js and npm are in /usr/local/bin, no need to specify NODE_HOME/bin/node
        PATH = "/usr/local/bin:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    git credentialsId: 'github-pat', url: 'https://github.com/Aditi55Pathak/Auth-routing.git', branch: 'master'
                }
            }
        }

        stage('Verify Node and NPM') {
            steps {
                // Ensure Node.js and npm are installed and accessible
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy step - configure this based on your deployment method'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
