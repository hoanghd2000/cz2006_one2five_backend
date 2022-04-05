module.exports = {
    apps: [{
      name: 'one2five_backend',
      script: 'node app.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'http://119.8.186.79/',
        key: '~/.ssh/id_rsa.pub',
        ref: 'origin/main',
        repo: 'git@github.com:hoanghd2000/cz2006_one2five_backend.git',
        path: '/backend',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }