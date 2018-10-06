const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=> {
  res.send(`Backend server listening on port 4000`);
});

const selectUsers = 'SELECT * FROM users';
const selectPosts = 'select * from posts p left join users u on p.fbid=u.fbid';
const insertPost = 'INSERT INTO posts (';
const getComments = 'select * from comments c left join users u on c.fbid=u.fbid where c.post_id='
const getUser = 'SELECT * FROM users U WHERE fbid="';

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
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

app.get('/users/:fbid', (req, res) => {
  connection.query(getUser + req.params.fbid + '"', (err, results) => {
    if (err)
      return res.send(err);
    else {
      return res.json({
        data: results
      })
    }
  })
});

app.get('/comments/:postid', (req, res) => {
  connection.query(getComments + req.params.postid, (err, results) => {
    if (err)
      return res.send(err);
    else {
      return res.json({
        data: results
      })
    }
  })
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

app.post('/posts', (req, res) => {
  connection.query('INSERT into posts(fbid, post_id, post_subject, body, time_stamp) values(?, ?, ?, ?, ?);', [req.body.fbid, req.body.post_id, req.body.post_subject, req.body.body, req.body.time_stamp], 
  (err, results) => {
    if(err)
      return res.send(err)
    else {
      return res.send("INSERTED YAYYYYY");
    }
  })
})

/*
app.put('/posts/createpost', (req, res) => {
  
  connection.query
})
*/
app.listen(4000, () => {
 console.log('Go to http://localhost:4000/posts to see posts');
});