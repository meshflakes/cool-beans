const MongoClient = require('mongodb').MongoClient;
// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');
// var admin = require("firebase-admin");
const url = 'mongodb+srv://allenzhang:allen123@cluster0-mfn6e.gcp.mongodb.net/test?retryWrites=true&w=majority';
const addItem = require("../backend/dbinsert");
var serviceAccount = require("./deltahacksvision.json");
const algosdk = require('algosdk');
const token = "ef920e2e7e002953f4b29a8af720efe8e4ecc75ff102b165e0472834b25832c1";
const server = "http://hackathon.algodev.network";

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
                output.push(object.name);
        		MongoClient.connect(url,function(err,client) {
        			console.log("Connected successfully to server");
                    const db = client.db("test");
                    console.log(object.name);
                    tmp = null
                    if (object.name in dict){
                        tmp = dict[object.name]
                    } else{
                        tmp = 10
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
exports.returnData = async (requ,res,next) =>{
    var account = algosdk.generateAccount();
    let lastround = (await client.status()).lastRound;
    let block = (await client.block(lastround));
    
}