var mongoinstance = require("mongodb");
var MongoClient = mongoinstance.MongoClient;
var url = "mongodb://localhost/db_mar22";
// var url = 'mongodb://yourname:bitcode@localhost/db_mar22';

MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    // if(err) throw err;
    if (err) {
      throw err;
    }

    // var emps = [
    //   {
    //     emp_id: 201,
    //     emp_name: "Shurti",
    //     emp_loc: "Delhi",
    //   },
    //   {
    //     emp_id: 202,
    //     emp_name: "Vishal Bhaiya",
    //     emp_loc: "New Delhi",
    //   },
    // ];
    // This query will help you to Add many data to your Database collection
    // client.db().collection("emp").insertMany(emps);

    // This query will help you to Add one data to your Database collection
    // client.db().collection("emp").insertOne({
    //   emp_id: 200,
    //   emp_name: "Bitcode",
    //   emp_loc: "Pune",
    // });

    // client.db().dropCollection("customers")
    // var cursor = client.db().collection("emp").find();
    // var cursor = client.db().collection("emp").find({"emp_id":110});

    // client
    //   .db()
    //   .collection("emp")
    //   .updateOne(
    //     { emp_id: 200 },
    //     { $set: { emp_name: "updatedAgain", emp_loc: "updatedAgain" } },
    //     { upsert: true },
    //     function (err, result) {
    //     //   if (err) throw err;
    //     //   console.log(result);
    //       var cursor = client.db().collection("emp").find();
    //       cursor.forEach(function (doc) {
    //         console.log(doc);
    //       });
    //     }
    //   );

    //
    client
      .db()
      .collection("emp")
      .deleteOne({ emp_id: 200 }, function (err, res) {
        var cursor = client.db().collection("emp").find();
        cursor.forEach(function (doc) {
          console.log(doc);
        });
      });

    // This function is iteration the data for Database
    // var cursor = client.db().collection("emp").find();
    // cursor.forEach(function (doc) {
    //   console.log(doc);
    //   // console.log(doc._id);
    //   // console.log(doc["emp_loc"]);
    // });
    // This console is for checking the connection of Database
    console.log("Connected");
    // This func is for close the connection of Database
    // client.close();
  }
);
