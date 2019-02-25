const mongoose = require("mongoose");

const db = mongoose.createConnection("mongodb://39.106.122.216:27017/shop",{
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
