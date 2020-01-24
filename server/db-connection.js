const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbConnectionUrl = `mongodb+srv://${dbUser}:${dbPass}@cluster0-fevdt.mongodb.net/${dbName}?retryWrites=true&w=majority`;

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, {useUnifiedTopology: true}, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB connection] ERROR: ${err}`);
            failureCallback(err);
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");

            successCallback(dbCollection);
        }
    });
}

module.exports = {
    initialize
};