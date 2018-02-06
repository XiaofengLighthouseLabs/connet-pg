const pg = require("pg");
const settings = require("./settings"); // settings.json
const lastName = process.argv[2];

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
const famousPeople = require("./pickup_people_module")(client);
client.connect((err) =>{
  if(err){
    return console.error("Connection Error",err);
  }
  famousPeople.findBylastName(process.argv[2], (err, result) => {
    if (err) {
      return console.log('Something went wrong:', err)
    }
    const rows = result.rows;
    console.log(rows);
    client.end();
  });
})
