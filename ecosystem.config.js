module.exports = {
  apps: [
    {
      name: 'hundeavl - produktion',
      script: 'npm',
      args: 'start',
    },
  ],
  deploy: {
    staging: {
      user: 'mn',
      host: '64.225.99.176',
      ref: 'origin/develop',
      repo: 'git@github.com:hjemmesidekongen/hundeavl.frontend.git',
      path: '/var/www/hundeavl.dk/',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
      'pre-setup': '',
      env: {
        NODE_ENV: 'development',
        PORT: 4011,
      },
    },
    production: {
      user: 'mn',
      host: '64.225.99.176',
      ref: 'origin/master',
      repo: 'git@github.com:hjemmesidekongen/hundeavl.frontend.git',
      path: '/var/www/hundeavl.dk/',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
      'pre-setup': '',
      env: {
        NODE_ENV: 'production',
        PORT: 4010,
      },
    },
  },
};
