//write dumy data to database
const db = require("./databaseConnection");

let writeData = async (url, text, confidence) => {
  let sql = `INSERT INTO mysqlproject.table (url, text, confidence) VALUES ('${url}', '${text}', '${confidence}')`;

  console.log(`🚀 ~ file: databaseFunctions.js:8 ~ writeData ~ sql`, sql);

  db.connection.query(sql, (err, result) => {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("1 record inserted");
    }
  });
};

module.exports = {
  writeData: writeData,
};
