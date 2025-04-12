module.exports = {
  apps: [
    {
      name: "staging",
      script: "npm run start:stage",
      watch: true,
      env_staging: {
        NODE_ENV: "stage",
      },
    },
    {
      name: 'dev',
      script: 'npm run start:development',
      watch: true,
      env_development: {
        NODE_ENV: 'development',
      }
    },
    {
      name: 'prod',
      script: 'npm run start:production',
      watch: true,
      env_production: {
        NODE_ENV: 'production',
      }
    }
  ]
}