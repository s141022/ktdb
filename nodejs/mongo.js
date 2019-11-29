var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');
MongoClient.connect("mongodb://localhost/"+settings.db, function(err, client){
    if(err){return console.dir(err);}
    console.log("conected to db");
    const db = client.db(settings.db);
    db.collection("users", function(err, collection){
        var docs = [
            {name: "taguchi", score: 40},
            {name: "fkoji", score: 80},
            {name: "dotinstall", score: 60}
        ];
        var stream = collection.find().stream();
        stream.on("data", function(item){
            console.log(item);
        });
        stream.on("end", function(){
            console.log("finished.");
        });
    });
});