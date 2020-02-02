# BasicExpressServer
Basic express server setup

![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg) [![Codeship Status for cdanmontoya/BasicExpressServer](https://app.codeship.com/projects/5db400b0-280f-0138-76df-464d1783be21/status?branch=master)](https://app.codeship.com/projects/383816) [![codecov](https://codecov.io/gh/cdanmontoya/BasicExpressServer/branch/master/graph/badge.svg)](https://codecov.io/gh/cdanmontoya/BasicExpressServer)

This basic server was made with the purpose of making easier a quick deployment of a Node-based application.

## Features

- Basic component-oriented architecture template.
- Eslint setup with Airbnb standard and security plugin.
- Jest as default testing framework.
- OpenAPI 3.0.0 documentation setup.
- MongoDB and Sequelize ready-to-go configuration files.

## How to use
You can click the ``Use this template`` button to make a copy to your own GitHub account!

A ``.env`` file can be provided in order to load environment variables. The environment variables used in this template are listed below.

- **DEV** Can be set to ``true`` if you are in a development environment, it allows the use of [``nodemon``](https://www.npmjs.com/package/nodemon).
- **PORT** Default port if you are not in a development environment. Allows a quick deploy to Heroku.
- **DB_DIALECT** Database dialect, must be set to ``mongo`` if you are using a Mongo database. If you are using a relational database, check the [Sequelize documentation](https://sequelize.readthedocs.io/en/1.7.0/docs/usage/#dialects) to see more about the supported dialects.
- **DB_HOST** Database host.
- **DB_NAME** Database name.
- **DB_USER** Database username.
- **DB_PASS** Database password.

Install dependencies

`` npm i ``

Run application

`` node app.js ``

## Preview

You can check the preview at:

- https://cdanmontoya-bes.herokuapp.com/api/v1/hello-world
- https://cdanmontoya-bes.herokuapp.com/api-docs
