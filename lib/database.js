const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URL;
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let connection;

export const getDbConnection = async () => {
    if(connection) return connection

    try {
        connection = await mongoClient.connect();
        console.log("Connected successfully to database");
        return connection;
    }
    // use the `db` object to perform database operations
    catch (err) {
        console.log("Error connecting to database:", err);
    }
}