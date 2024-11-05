const mongoose = require('mongoose');
const config = require("../config");

const { uri, name } = config.get('db');
const connectionString = `${uri}${name}`;
mongoose.connect(connectionString).catch((error) => console.error('error', 'Mongoose connection Issue:', error));
mongoose.connection.on('connected', () => console.info('info', 'Mongoose connection:', 'Connection Established'));
mongoose.connection.on('reconnected', () => console.info('info', 'Mongoose connection:', 'Connection Reestablished'));
mongoose.connection.on('disconnected', () => console.info('info', 'Mongoose connection:', 'Connection Disconnected'));
mongoose.connection.on('close', () => console.info('info', 'Mongoose connection Issue:', 'Connection Closed'));
mongoose.connection.on('error', (error) => console.error('error', 'Mongoose connection Issue:', error));

module.exports = mongoose;
