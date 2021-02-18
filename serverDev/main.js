const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const Data = require('./mock')
const mysql  = require('mysql');
const app = express()

/***********************
 * 数据库连接
 * 
 */
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '3306', 
  user     : 'root',
  password : '',
  database : 'ft'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
/***********************
 * **********************
 */


app.all("*",(req,res,next) => {
  res.header("Access-control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","access-control-allow-origin,accept,x-api-applicationid,content-type,authorization");
  // res.header("Access-Control-Allow-Headers","*");
  next();
})
app.listen(5100, () => {
    console.log(`Example app listening at http://localhost:5100`)
  })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/',function(req,res){
  
})