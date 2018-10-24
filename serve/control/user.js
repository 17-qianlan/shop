const {db} = require("../schema/config"),
    userName = require("../schema/user"),
    encrypt = require("../until/encrypt"),
    createToken = require("../token/create_token");

const User = db.model("users",userName);



exports.l = async ctx => {
    console.log("2");
    ctx.body = "222";
}

//注册
exports.res = async (ctx,next) => {
    let data = ctx.request.body;
    let username = data.username,
        password = encrypt(data.password),
        token = createToken(username);
    await new Promise((resolve,reject) => {
        User.find({username},(err,data) => {
            if( err ) return reject(err);
            if( data.length !== 0 )return resolve("");//用户名已存在
            const _user = new User({
                username,
                password,
                token
            })
            _user.save((err,data) => {
                if( err ){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }).then( async data => {
        if( !data ){//用户名已存在
            ctx.body = {
                info : true
            };
        }else{
            //登陆成功
            ctx.body = {
                success : true
            };
        }
    }).catch( async err => {
        ctx.body = {
            success : false
        };
        console.log("注册失败");
    })
}


//登录
exports.login = async (ctx,next) => {
    let data = ctx.request.body;
    let username = data.username,
        password = encrypt(data.password);
    await new Promise((resolve,reject) => {
        User.find({username},(err,data) => {
            if( err ) return reject(err);
            if( data.length === 0 )return reject("");//用户名不存在
            if (data[0].password === password ){
                let token = createToken(username);
                data[0].token = token;
                data[0].save(err => {
                    if( err )reject(err);
                })
                return resolve(data);
            }
            resolve("");
        })
    }).then( async data => {
        if( !data[0] ){//密码错误
            ctx.body = {
                success : false
            };
        }else{
            ctx.body = {
                success : true,
                username,
                token : data[0].token,
                avatar : data[0].avatar
            };//登陆成功
        }
    }).catch( async err => {
        ctx.body = {
            info : true
        };//用户名不存在
    })
}
