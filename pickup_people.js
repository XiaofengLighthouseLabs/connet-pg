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

function pickupFamousPeople(num, firstName, lastName, birthdate){
      console.log(`${num}: ${firstName}, ${lastName}, born ${birthdate}`);
    };
client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  client.query("select * from famous_people where last_name = $1::text", [lastName], (err,result)=> {
    if (err) {
     return console.error("error running query", err);
    }

      const num = result.rows[0].id;
      // console.log(result.rows);
      const firstName = result.rows[0].first_name;
      const birthdate = result.rows[0].birthdate;
      pickupFamousPeople(num, firstName, lastName, birthdate);

    client.end();
  });
});





