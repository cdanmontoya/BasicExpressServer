const Express = require('express');
const server = require('./config/server');

const app = new Express();
server(app);

app.listen(app.get('port'), () => {
  console.log(`The app is listening on the port ${app.get('port')}`);
});
