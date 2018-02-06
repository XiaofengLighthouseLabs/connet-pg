


const settings = require("./settings"); // settings.json
const fistname = process.argv[2];
const lastname = process.argv[3];
const birthdate = process.argv[4];

const knex = require('knex')({
  client: 'pg',
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }

})

knex('famous_people')
  .returning('id')
    .insert([{first_name: `${fistname}`, last_name: `${lastname}`, birthdate:`${birthdate}`}])
  .then(function(){
     knex('famous_people')
       .select ()
       .asCallback(function(error, result){
        if (error) return console.error(error);
          console.log(result);
          process.exit();
       });

    })
  .then(()=> knex.destroy())
  .then(()=>console.log('destroyed'));

