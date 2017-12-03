var cfg = require("./ini-file-loader").load("conf.ini")["file server"];
var c = require("./ini-file-loader").load("conf.ini");
console.log(c);
console.log(cfg["host"]);
console.log(cfg["port"]);
console.log(cfg["root"]);
console.log("cfg:",cfg);