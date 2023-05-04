// const { MongoClient } = require('mongodb');

// async function connectToDatabase() {
//   const uri = process.env.MONGO_URL;

//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     await client.connect();
//     console.log("Connected successfully to database");
//     const db = client.db("<dbname>");
//     // use the `db` object to perform database operations
//   } catch (err) {
//     console.log("Error connecting to database:", err);
//   } finally {
//     await client.close();
//   }
// }

// connectToDatabase();

