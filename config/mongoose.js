const mongoose = require("mongoose");

//const db = 'mongodb+srv://ShivanshuPanwar:jE6nW4Vb5rJWJm4@cluster0.e14ml.mongodb.net/contactslist?retryWrites=true&w=majority'

mongoose.connect(
  "mongodb+srv://ShivanshuPanwar:jE6nW4Vb5rJWJm4@cluster0.e14ml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// }).then(() =>{
//     console.log("Connection Successful");
// }).catch((err) => console.log('no connection'));
//connecting to the database
//mongoose.connect('mongodb://localhost/Full_One_db');

//chek if was successful
//const db = mongoose.connection;

//db.on('error', console.error.bind(console,'error connecting to db'));

// db.once('open',function(){
//     console.log('Successfully connected to the database');
// });
