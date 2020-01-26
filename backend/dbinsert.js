const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://allenzhang:allen123@cluster0-mfn6e.gcp.mongodb.net/test?retryWrites=true&w=majority';
MongoClient.connect(url,function(err,client) {
    console.log("Connected successfully to server");
    const db = client.db("test");
    var output = db.collection('test').insertOne({
        name:"Apple",
        quantity:5,
        expiredDate:"tomorrow",
        addedDate:"5/12"
    })
    client.close();
});