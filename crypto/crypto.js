var crypto = require("crypto");
function encrypt(data) {
	var key = "jianshipingtai";
	var secretKey = new Buffer(key, "utf8");
	secretKey = crypto.createHash("md5").update(secretKey).digest("hex");
	secretKey = new Buffer(secretKey, "hex");
	iv = secretKey;
	var cipher = crypto.createCipheriv("aes-128-cbc", secretKey, iv), coder = [];
	coder.push(cipher.update(data, "utf8", "base64"));
	coder.push(cipher.final("base64"));
	return coder.join("");
}
// 解密
function decrypt(data) {
	var key = "jianshipingtai";
	var secretKey = Buffer(key, "utf8");
	secretKey = crypto.createHash("md5").update(secretKey).digest("hex");
	secretKey = new Buffer(secretKey, "hex");
	iv = secretKey;
	var cipher = crypto.createDecipheriv("aes-128-cbc", secretKey, iv), coder = [];
	coder.push(cipher.update(data, "base64", "utf8"));
	coder.push(cipher.final("utf8"));
	return coder.join("");
}

var passwordEncrypt = encrypt("xuhongqiang.2017.xuhongqiang.2017.xuhongqiang.2017.xuhongqiang.2017");
console.log("passwordEncrypt:",passwordEncrypt);
var passwordDecrypt = decrypt(passwordEncrypt);
console.log("passwordDecrypt:",passwordDecrypt);