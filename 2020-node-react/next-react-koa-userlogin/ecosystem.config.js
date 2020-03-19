module.exports = {
  apps : [{
    name      : 'next-react-koa-userlogin',
    script    : 'server.js',
    log_date_format: 'YYYY-MM-DD HH:mm',
    env: {
      NODE_ENV: 'development'
    },
    watch: [
      'routes',
      'api/request',
      'server.js',
      'utils',
      'server',
    ],
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
