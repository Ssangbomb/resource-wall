const db = require('../connection');

//get all post or search specific post
//Only two option they can search by topic and title include description.
const getAllPosts = (limit = 8) => {
  let query = `SELECT * FROM posts `;

  let queryParms = [];


  queryParms.push(limit);
  query += `LIMIT $${queryParms.length};`;
  console.log(db)

  return db
  .query(query, queryParms)
  .then((data) => {
    console.log(data.rows);
    return data.rows;
  });
};

module.exports = { getAllPosts };