const mongoose = require("mongoose");

const db = mongoose.createConnection("mongodb://localhost:27017/token",{
    useNewUrlParser : true
})

mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

db.on("err", () => {
    console.log("error");
});

db.on("open", () => {
    console.log("success");
})


module.exports = {
    db,
    Schema
}
