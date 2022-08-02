const { MongoClient } = require("mongodb");
// const connectionString = "mongodb+srv://loanify:loanify123@cluster0.jxzzt.mongodb.net/test";
const connectionString = "mongodb://root:rootPass@localhost:27027/?directConnection=true&authMechanism=DEFAULT";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("loanify");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};