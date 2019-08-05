const mysql = require('mysql');
const config = require('../server/config');

var pool = mysql.createPool(config.mysqlInfo);

let migration = {};

migration.createDatabase = () => {
    if(config.models != null){
        config.models.forEach(( Model ) => {
            migration.createTable(Model);
        });
    }else{
       return "Null Models";
    }

     
}

migration.createTable = (Model) => {
    var sqlQuery = "Create Table " + Model.tableName + 
    " (id int NOT NULL PRIMARY KEY ";
    Model.models.forEach( (_data_) => {
        sqlQuery = sqlQuery + " , " + _data_.name + " " + _data_.type;
    });
    sqlQuery = sqlQuery + ");";

    console.log("Sql CODE :" + sqlQuery);
    try{
        return new Promise((resolve, reject) => {
            pool.query(sqlQuery, (err, results) => { 
            console.log(err ?"ERROR TABLE "+ Model.tableName + "\n ERROR: " + err
             : "Create Table " + Model.tableName );
            });
        });
        
    }catch(ex){
        throw ex;
    }
    console.log(sqlQuery);
}

module.exports = migration;