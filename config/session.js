const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore() {
  const MongoDBClient = mongoDbStore(expressSession);

  const store = new MongoDBClient({
    uri: 'mongodb://127.0.0.1:27017',
    databaseName: 'online-shop',
    collection: 'sessions'
  });

  return store;
}

function createSessionConfig(){
  return {
    secret: 'super-secret',
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 100 // 2 days
    }
  };
}

module.exports = createSessionConfig;