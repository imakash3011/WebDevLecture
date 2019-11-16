const {MongoClient}  =require('mongodb')
//or we can use following method to require mongodb
// const MongoClient = require('mongodb').MongoClient;

const DB_URL='mongodb://localhost:27017';

//connecting with Database
MongoClient.connect(DB_URL,(err,client)=>{
    if(err) throw err

    // Database Name "testdb"
    //creating database if not present already...and if already present than modify that database
    const testdb=client.db('testdb')
    const people = testdb.collection('people');

    //just remove the insert part from write.js and copy-paste the rest part
    //({}) :passing an empty obj. to read whole data ...we can also read the data in part-wise if too large
   // use the "find()"  to read the data from the database
    people.find({
        //using or the filter multiple data
         $or: [ 
             //gt :greater than   and lt :less than
             { age: { $gt: 10 } },
              { price:{ $lt: 10 } } 
        ] 
    }).toArray((err,results)=>{
        if(err) throw err
        console.log(results)
    })
})