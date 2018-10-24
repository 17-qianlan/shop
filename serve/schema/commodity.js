const {Schema} = require("./config");


const commodity = Schema({
    title : String,
    src : String,
    price : String,
    slogan : String
},{
    versionKey : false
})

module.exports = commodity;
