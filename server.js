/*const mysql = require('mysql');

const con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "abc",
 database: "team1"
});


con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }

 /* con.query('SELECT * FROM user', (er,rows) => {

  if(er) console.log('Error with query');

  console.log('Data received from Db:\n');
  console.log(rows);
  });
console.log('connected as id ' + con.threadId);
});
var ideas = [];
con.query('SELECT * FROM user', (er,rows) => {

  if(er) console.log('Error with query');
for(var i = 0; i < rows.length; i++)
{
    ideas.push({idea_id: rows[i].idea_id});
}
  console.log('Data received from Db:\n');
  console.log(rows);
  });

  res.end(JSON.stringify())

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
 */
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());

app.get('/', (req, res)=> {
  res.send(`Backend server listening on port 4000`);
});

const selectUsers = 'SELECT * FROM users';
const selectPosts = 'SELECT * FROM posts';

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'team1'
}); 

connection.connect((err) => {
  if(err){
    return err;
  }
});


app.get('/users', (req, res) =>{
  connection.query(selectUsers, (err, results) => {
    if(err)
      return res.send(err)
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.get('/posts', (req, res) =>{
  connection.query(selectPosts, (err, results) => {
    if(err)
      return res.send(err)
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.listen(4000, () => {
 console.log('Go to http://localhost:4000/posts to see posts');
});