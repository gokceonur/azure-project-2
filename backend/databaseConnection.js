//mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "azure-project-sql-server.mysql.database.azure.com",
  user: "azureroot",
  password: "1234Onur.",
  database: "mysqlproject",
  port: 3306,
  ssl: true,
});

connection.connect();

module.exports = {
  connection: connection,
};
