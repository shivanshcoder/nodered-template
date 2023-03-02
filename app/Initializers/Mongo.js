const { MongoClient } = require("mongodb");
// const connectionString = "mongodb://root:rootPass@mongodb:27017/?directConnection=true&authMechanism=DEFAULT"
// const connectionString = "mongodb://root:rootPass@localhost:27027/?directConnection=true&authMechanism=DEFAULT"
const connectionString = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?directConnection=true&authMechanism=DEFAULT`;
console.log(connectionString)
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log(`client ${client}`)
let dbConnection;

module.exports = {
  connectToServer: function () {
    console.log("Trying to connect to MONGODB")
    return client.connect().then(db=>{
      console.log("Connected to MONGODB")
      dbConnection = db;
    }).catch(err=>{
      console.log("Could not connect to mongodb");
      console.log(err);
      dbConnection = undefined;
    })
    // client.connect(function (err, db) {
    //   if (err || !db) {
    //     return callback(err);
    //   }

    //   // dbConnection = db.db("fintech");
    //   dbConnection = db;
    //   console.log("Successfully connected to MongoDB.");

    //   return callback();
    // });
  },

  getDb: async function () {
    if(dbConnection == undefined){
      // in case the mongodb gets reconnected!!
      console.log("Trying to Connect AGAINNNN!!!!")
      await this.connectToServer();
    }
    return dbConnection;
  },
};