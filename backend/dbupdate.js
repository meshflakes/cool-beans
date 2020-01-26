const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://allenzhang:allen123@cluster0-mfn6e.gcp.mongodb.net/test?retryWrites=true&w=majority';
name = "Apple";
date = '5/19';
MongoClient.connect(url,function(err,client) {
    console.log("Connected successfully to server");
    const db = client.db("test");
    var myquery = { name: name };
    var newvalues = { $set: {expiredDate:date } };
    var output = db.collection('test').updateOne(myquery,newvalues,function(err,res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});