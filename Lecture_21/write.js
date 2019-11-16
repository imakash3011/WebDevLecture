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
    //inserting multiple object
    // people.insertOne for  inserting single entity ..here instead of an array an object will goa
    //mind the braces for inserting one and many element
    people.insertMany([ 
        //here square bracket "[ ]" represent that data is going the form of an array
        //if single data will go then it will go in the form of the "{ }" i.e object
        {name:'Akash',age:10,city:'Delhi'},
        {name:'Akshit',age:12,city:'Gorakhpur'},
        {name:'abhishek',age:14,city:'Bengal'},
        {name:'Devesh',age:8,city:'Lucknow'},
        {name:'Divanshu',age:13,city:'Noida'}
    ],(err,result)=>{
        if(err) throw err
        console.log(result)
    })
})
