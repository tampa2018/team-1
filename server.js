const mysql = require('mysql');

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
  }); */
console.log('connected as id ' + con.threadId);
});

con.query('SELECT * FROM user', (er,rows) => {

  if(er) console.log('Error with query');

  console.log('Data received from Db:\n');
  console.log(rows);
  });

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});