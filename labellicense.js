
// detect car 
// return True if its a car
const labelDectection = async () => {
    try {
        // Creates a client
        const client = new vision.ImageAnnotatorClient();
        const request = {
            image: {content: gcsUri},
          };          
   
        console.log(res)
        return res;
    } catch (err){
        console.log(err);
    }
}
// var request = {
//     image: {
//       image: {content: fs.readFileSync(fileName)},
//       source: {imageUri: pic}
//     }
// };
// return false if not detecting a car or error
// return licence plate if confidence >0.6 and isCar == true 
const licenseDectection = async () =>{
    // get label 
    const result = await labelDectection();
    const client = new vision.ImageAnnotatorClient();
    // if it is a car
    if (result==null){

}

// const test = async() =>{
//     var t = await licenseDectection();
//     console.log(t);
// }
(function() {
    var c = 0;
    var timeout = setInterval(function() {
      console.log(c);
      c++;
      labelDectection().then(data=>{
        if (!data){
            const MongoClient = require('mongodb').MongoClient;
            const assert = require('assert'); 
            // Connection URL
            const url = 'mongodb+srv://admin:admin@cluster0-uxw2k.mongodb.net/test?retryWrites=true&w=majority'; 
            // Use connect method to connect to the Server
            MongoClient.connect(url, function(err, client) {
              assert.equal(null, err);
              console.log("test");
            
              const db = client.db("test");
            
             //  // This adds a value to the db
             //  db.collection('names').insertOne({
             //  	name: "Mickey Mouse",
