const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://allenzhang:allen123@cluster0-mfn6e.gcp.mongodb.net/test?retryWrites=true&w=majority';


// Create a new MongoClient

// Use connect method to connect to the Server
MongoClient.connect(url,function(err,client) {
    console.log("Connected successfully to server");
    const db = client.db("test");
    var output = db.collection('test').find({});
    // response.push({
    //     "_id": "5e2cf938ce73470c01015665",
    //     "name": "Apple",
    //     "quantity": 5,
    //     "expiredDate": "tomorrow",
    //     "addedDate": "5/12"
    // })
    // function iterateFunc(doc) {
    //     // console.log("-->",doc);
    //     response.push(doc);
    //     // vals = JSON.stringify(doc, null, 4);
    //     // console.log("----");
    //     // console.log(vals);
    //     }

    //     function errorFunc(error) {
    //         console.log(error);
    //         // res.status(404).send(error)
    //     }
    output.toArray(function(err, result) {
        if (err) throw err;
        var response = JSON.stringify(result);
        console.log(response);
      });
        // console.log(output);
        // output.forEach(iterateFunc, errorFunc);
        // console.log(response);
    // var cursor = db.collection('test').insertOne({
    //     name:"Apple",
    //     quantity:5,
    //     expiredDate: "tomorrow",
    //     AddDate: "05/12"
    // })
    console.log("----");
    client.close();
});

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb+srv://allenzhang:<password>@cluster0-mfn6e.gcp.mongodb.net/test?retryWrites=true&w=majority';

//   Use connect method to connect to the Server
//   MongoClient.connect(url, function(err, client) {
//   console.log("test");

//   const db = client.db("test");

//   //  // This adds a value to the db
//   //  db.collection('names').insertOne({
//   //  	name: "Mickey Mouse",
//   //  	qty: 100,
//   //    license_plate: "123ABC"
//       // })
      
//       // This reads a value from the db
//       var cursor = db.collection('test').find({});
//       function iterateFunc(doc) {
//       vals = JSON.stringify(doc, null, 4);
//       res.send(vals);
//       console.log(vals);
//       }

//       function errorFunc(error) {
//           console.log(error);
//           res.status(404).send(error)
//       }

//       cursor.forEach(iterateFunc, errorFunc);

//   // Update value in db
//   var myquery = { name: /^M/ };
//   var newvalues = { $inc: { qty: 3 } };
//   db.collection('names').updateOne(myquery, newvalues, function(err, res) {
//       if (err) throw err;
//       console.log("value incremented");
//   });
//   client.close();
//   });