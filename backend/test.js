/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const vision = require('@google-cloud/vision');
const gcsUri ='gs://ultra-might-264612.appspot.com/pic2';
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://allenzhang:allen123@cluster0-mfn6e.gcp.mongodb.net/test?retryWrites=true&w=majority';
exports.helloWorld = async (req, res) => {
    try {
        // Creates a client
        const client = new vision.ImageAnnotatorClient();
        const request = {
            image: {content: gcsUri},
          };          
        const [result] = await client.objectLocalization(gcsUri);
        const objects = result.localizedObjectAnnotations;
        var res;
     	var output = [];
        objects.forEach(object => {
            if (object.name){
                output.push(object.name);
		// 		MongoClient.connect(url,function(err,client) {
    	// 			console.log("Connected successfully to server");
    	// 			const db = client.db("test");
    	// 			var output = db.collection('test').insertOne({
        // 				name:object.name,
        // 				quantity:1,
        // 				expiredDate:"Next Month",
        // 				addedDate:Date()
    	// 			})
    	// 	client.close();
		// });
      }
      res.send(output);
    });
    } catch (err){
        console.log(err);
      res.send(err);
    }
};

