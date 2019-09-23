const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

module.exports = function() {
  let server = express(),
    create,
    start;

  server.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

  create = (config, db) => {
    let routes = require('../routes');

    server.set('env', config.env);
    server.set('port', config.port);
    server.set('hostname', config.hostname);

    server.use(morgan('dev'));
    server.use(cookieParser());
    server.use(bodyParser.json());
    server.use(expressValidator());
    server.use(
      bodyParser.urlencoded({
        extended: false
      })
    );

    mongoose.connect(db.database, {
      useNewUrlParser: true,
      useCreateIndex: true
    });

    routes.init(server);
  };

  start = () => {
    let hostname = server.get('hostname'),
      port = server.get('port');
    server.listen(port, function() {
      console.log(
        'Express server listening on - http://' + hostname + ':' + port
      );
    });
  };
  return {
    create: create,
    start: start
  };
};
