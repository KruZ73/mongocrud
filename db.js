const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kruz:moppynkopok@cluster0.dmlfxzd.mongodb.net/?retryWrites=true&w=majority";





async function connect() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        await client.db("admin").command({ping: 1 });
        console.log("Pinged successfully");
        return client;
    } catch (e) {
        console.log("Error" + e);
        process.exit(1);
    }
}

module.exports = {connect}