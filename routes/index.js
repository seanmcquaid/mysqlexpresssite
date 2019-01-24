var express = require('express');
var router = express.Router();
// Use the mysql module to connect and query from express/node
// the mysql is not part of CORE so we need to npm install
var mysql = require("mysql");
const config = require("../config");
var connection = mysql.createConnection(config);

connection.connect();
console.log("I'm connected");
router.get('/', function(req, res, next) {
  // we want to load up a list of our restaurants on the home page
  // these are inside of my sql
  // inside this route, BEFORE we res.render a view
  // we want to query the database, get the data then we can send it over to the view
  const query = "SELECT * FROM restaurant;"
  connection.query(query, (err,results)=>{
    if(err){
      throw err;
    } else {
      res.json(results);
    }
  });
});

module.exports = router;