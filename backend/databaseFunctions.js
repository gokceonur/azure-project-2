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

let readData = async (callback) => {
  let sql = `SELECT * FROM mysqlproject.history ORDER BY id DESC LIMIT 10`;

  console.log(`🚀 ~ file: databaseFunctions.js:25 ~ readData ~ sql`, sql);

  db.connection.query(sql, (err, result) => {
    if (err) {
      console.log("error: ", err);
    } else {
      console.log("result: ", result);
      callback(result);
    }
  });
};

module.exports = {
  writeData: writeData,
  readData: readData,
};
