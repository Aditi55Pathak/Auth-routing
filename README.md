# React Auth Routing Project

This project is a React application with authentication and routing features. It integrates with Jenkins for continuous integration (CI) to ensure code quality and smooth deployment.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Continuous Integration with Jenkins](#continuous-integration-with-jenkins)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This React project demonstrates the use of authentication and routing with basic front-end components. It uses Jenkins to automate the testing, building, and deployment of the application.

## Features

- User authentication (login/logout)
- Protected routes
- Continuous Integration with Jenkins
- Automated tests using Jest

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Aditi55Pathak/Auth-routing.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Auth-routing
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the application locally:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Continuous Integration with Jenkins

This project uses Jenkins for continuous integration (CI). The pipeline is defined in the `Jenkinsfile` located at the root of this repository.

### Jenkins Pipeline Overview:

- **Checkout**: The source code is pulled from the GitHub repository.
- **Install Dependencies**: The `npm install` command is executed to install all necessary project dependencies.
- **Test**: The project is tested using `npm test`.
- **Build**: The project is built using `npm run build`, creating a production-ready build.
- **Archive Build Artifacts**: The build artifacts are archived in Jenkins for later use.
- **Deploy**: The application can be deployed using the deployment steps specified in Jenkins (manual setup required).

#### Jenkinsfile:

```groovy
pipeline {
    agent any

    tools {
        nodejs 'NodeJS 16.x' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-pat', url: 'https://github.com/Aditi55Pathak/Auth-routing.git', branch: 'master'
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
