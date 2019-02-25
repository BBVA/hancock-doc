// Please read the documentation about Shuttle's Jenkins Pipelines for further information
// https://ndbkickstart.atlassian.net/wiki/spaces/XTEAM/pages/153550863/Jenkinsfile+Reference

// Default pipeline for NodeJS
nodePipeline{

      // Make some custom commands (generate unit tests, etc.)
      stage('Build'){
        container('node'){
          sh """
            yarn cache clean --force
            yarn install
            export NODE_ENV=production        
            yarn docs:build
          """
        }
      }

      // Docker build and push. The image will be: registry-dev.kickstartteam.es/PROJECT/REPO_NAME:GIT_COMMIT
      // It also tag the build with the branch name
      docker_shuttle_stage()

      // Deploy the image to Kubernetes
      deploy_shuttle_stage(project: "hancock", environment: "develop", askForConfirmation: false)
}
