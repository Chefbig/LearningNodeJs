var mysql = require('mysql');

var TEST_DATABASE = 'onlineDB';
var TEST_TABLE = 'db_user';

//创建连接  
var connection = mysql.createConnection({
    host: '60.205.205.170',
    port: '9252',
    user: 'root',
    password: '123456',
    database: 'onlineDB'
});

connection.connect();

/**
 * 从数据库查询数据
 */
connection.query('SELECT * from db_user', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0]);
    //connection.end();
});

/**
 * 从数据库增加数据
 */

var addSql = 'INSERT INTO db_user(username,passwd) VALUES(?,?)';
var addSqlParams = ['菜鸟3', '123456'];
connection.query(addSql, addSqlParams, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    //connection.end();
});

/**
 * 从数据库删除数据
 */
var delSql = 'DELETE FROM db_user where username="菜鸟1"';
connection.query(delSql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    //connection.end();
});

/**
 * 从数据库修改数据
 */
var modSql = 'UPDATE db_user SET passwd = ? where username = ?';
var modSqlParams = ['654321', '菜鸟2'];
connection.query(modSql, modSqlParams, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
    //connection.end();
});

connection.end();