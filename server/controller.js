const MongoClient = require('mongodb').MongoClient;


const gcsUri ='gs://ultra-might-264612.appspot.com/pic2';
const assert = require('assert');

var dict = {
    "Tomatoes":7,
    "Apples": 30
};

exports.test = (req,res,next)=>{
    try {
        res.send("url works")
    } catch (error) {
        res.status(404).send(error)
    }
}

exports.identification = async (req,res,next) =>{
// Connection URL
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

                    }
                    tmp = tmp.toString() + " days"
        			var output = db.collection('test').insertOne({
        				name:object.name,
        				quantity:1,
        				expiredDate:tmp,
        				addedDate:Date()
        			})
        	client.close();
        });
    }
    res.send(output);
    });
    } catch (err){
        console.log(err);
    res.send(err);
    }

}
const port = 9100;
const client = new algosdk.Algod(token, server,);
exports.