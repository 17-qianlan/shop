const {db,Schema} = require("../schema/config"),
    mongoose = require("mongoose"),
    shopping = require("../schema/shopping");


const ShopCar = db.model("shoppings",shopping);
const ObjectId = mongoose.Types.ObjectId;

exports.joinCar = async ctx => {
    let data = ctx.request.body;
    await new Promise((resolve,reject) => {
        let _shopCar = new ShopCar(data);
        _shopCar.save((err,data) => {
            if( err ){
                return reject(err);
            }
            resolve(data);
        })
    }).then(async data => {
        ctx.body = "222";
    }).catch(async err => {
        console.log(err);
    })
}

//连表查询,存储(Schema)一个字段,只需要存一个就可以了,然后通过数组(需要的数据对应的字段就可以了),在populate里写数组(参数),可以拿到所有的该字段中的所有数据
exports.getCar = async ctx => {
    await new Promise((resolve,reject) => {
        ShopCar.find((err,data) => {
            if(err) return reject(err);
            resolve(data);
        }).populate(["title","src"])
    }).then(async data => {
            ctx.body = data
    }).catch(async err => {
        console.log(err);
    })
}

//总数
exports.getCount = async ctx => {
    await new Promise((resolve,reject) => {
        ShopCar.aggregate([{$group:{_id: 'total',totalCount:{$sum:'$count'}}}],(err,data) => {
            if(err)return reject(err);
            resolve(data);
        })
    }).then(data => {
        ctx.body = data;
    }).catch(async err => {
        console.log(err);
    })
}

//小计
exports.shopCount = async ctx => {
    await new Promise((resolve,reject) => {
        ShopCar.find((err,data) => {
            if(err) return reject(err);
            resolve(data);
        })
    }).then(async data => {
        ctx.body = data
    }).catch(async err => {
        console.log(err);
    })
}

//更新

exports.sendChange = async ctx => {
    let change = ctx.request.body;
    let _id = change._id,
        val = change.val;
    //此处的保存必须ObjectId必须要用mongoose上面的ObjectId,否则报错或者返回undefined
    await new Promise((resolve,reject) => {
        ShopCar.find({"_id":ObjectId(_id)},(err,data) => {
            if(err) return reject(err);
            if(data[0]){
                data[0].count = val;
                data[0].save(err => {
                    if(err)reject(err);
                })
            }
            resolve(data);
        })
    }).then(async data => {
        ctx.body = data;
    }).catch(async err => {
        console.log(err);
    });
}
