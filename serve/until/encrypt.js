const crypto = require("crypto");

module.exports = (password,key="lightBlue") => {
    const hmac = crypto.createHmac("sha256",key);
    hmac.update(password);
    const passwordHmac = hmac.digest("hex");//表示16进制
    return passwordHmac;
}
