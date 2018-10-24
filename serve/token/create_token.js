const jwt = require("jsonwebtoken");

module.exports = (user_id) => {
    const token = jwt.sign({
        user_id : user_id
    },
        "sinner77" ,
        {
            expiresIn : "1h"//过期时间//expiresIn "1d" "60s"  "2 days" "120" is equal to "120ms"
        }
    )
    //https://www.npmjs.com/package/jsonwebtoken
    return token;
}
