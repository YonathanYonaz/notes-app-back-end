const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
/* edge://flags/#block-insecure-private-network-requests // disable 'block insecure private network'
 http://notesapp-v1.dicodingacademy.com/ // client app

 - how to connect local and remote repository
 'git remote add origin <remote repository URL> '
 - how to post or save commit history from local to remote repository
 git push origin master */
