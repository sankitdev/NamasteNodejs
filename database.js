const { MongoClient } = require("mongodb");
const url = "mongodb+srv://ankit:ankit123@testdb.90zdu.mongodb.net/";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
    const db = client.db("testdb");
    const col = db.collection("testdb");
    const filter = { name: "Ankit" };
    const result = await col.deleteOne(filter);
    console.log(result);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
