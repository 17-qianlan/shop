const {Schema} = require("./config");

const ObjectId = Schema.Types.ObjectId;

const shoppingSchema = new Schema({
    src : {
        type : ObjectId,
        ref : "commodities"
    },
    count : Number
},{
    versionKey : false,
    timestamps: {//时间    创建的时间
        createdAt: "created"
    }
})


module.exports = shoppingSchema;
