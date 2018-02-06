module.exports = function(client){


  function all (callback){
    const query = "select * from famous_people,";
    client.query(query, callback);
  }


  function findByfirstName( firstName, callback){
    const query = "select * from  famous_people where first_Name = $1::text;"
    client.query(query, [firstName],callback);
  }

  function findBylastName(lastName, callback){
    const query = "select * from  famous_people where last_Name = $1::text;"
    client.query(query, [lastName],callback);
  }

  function findById (id, callback){
    const query = "select * from  famous_people where id = $1::int;"
    client.query(query, [id],callback);
  }


  return {
    all,
    findByfirstName,
    findBylastName,
    findById
  }
}