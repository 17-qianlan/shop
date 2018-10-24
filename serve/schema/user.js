const {Schema} = require("./config");


const userSchema = new Schema({
    username : String,
    password : String,
    token : String,
    avatar : {
        type : String,
        default : `../../static/avatar/${Math.floor(Math.random()*4)}.jpg`
    },
    create_time: Date
},{
    versionKey : false
})

module.exports = userSchema;
