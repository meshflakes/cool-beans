const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://allenzhang:allen123@cluster0-mfn6e.gcp.mongodb.net/test?retryWrites=true&w=majority';
name = "Apple"
MongoClient.connect(url,function(err,client) {
    console.log("Connected successfully to server");
    const db = client.db("test");
    var output = db.collection('test').deleteOne({
        name:name
    });
    client.close();
});