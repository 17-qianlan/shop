const {db} = require("../schema/config"),
    commodity = require("../schema/commodity");


const Commodity = db.model("commodities",commodity);


exports.ss = async ctx => {
    let data = {
        "one": {
            title : "专注洗澡五千年",
            slogan : "好用又好喝",
            price : "￥600.00",
            src : "../../static/images/commodity/1.png"
        },
        "two": {
            title : "专注生活500年",
            slogan : "毋庸置疑",
            price : "￥110.00",
            src : "../../static/images/commodity/2.png"
        },
        "three": {
            title : "毋庸置疑",
            slogan : "个人值得你喜欢",
            price : "￥190.00",
            src : "../../static/images/commodity/3.png"
        },
        "four":{
            title : "个人值得你喜欢",
            slogan : "一样单身的朋友",
            price : "￥160.00",
            src : "../../static/images/commodity/4.png"
        },
        "five":{
            title : "一样单身的朋友",
            slogan : "是兜兜转转找不到爱",
            price : "￥980.00",
            src : "../../static/images/commodity/5.png"
        },
        "six":{
            title : "是兜兜转转找不到爱",
            slogan : "有人愿意和你牵手",
            price : "￥990.00",
            src : "../../static/images/commodity/6.png"
        },
        "seven":{
            title : "有人愿意和你牵手",
            slogan : "上虞市的那七八",
            price : "￥240.00",
            src : "../../static/images/commodity/7.png"
        },
        "night":{
            title : "上虞市的那七八",
            slogan : "得顺利吗？",
            price : "￥230.00",
            src : "../../static/images/commodity/8.png"
        },
        "nine":{
            title : "得顺利吗？",
            slogan : "九十比十或六十比",
            price : "￥200.00",
            src : "../../static/images/commodity/9.png"
        },
        "ten":{
            title : "九十比十或六十比",
            slogan : "上最长也最远更最愧",
            price : "￥180.00",
            src : "../../static/images/commodity/10.png"
        },
        "eleven":{
            title : "上最长也最远更最愧",
            slogan : "距离便依次是北",
            price : "￥560.00",
            src : "../../static/images/commodity/11.png"
        },
        "twelve":{
            title : "距离便依次是北",
            slogan : "己的人格作担保",
            price : "￥500.00",
            src : "../../static/images/commodity/12.png"
        },
        "thirteen":{
            title : "己的人格作担保",
            slogan : "西邻竺可桢的故",
            price : "￥440.00",
            src : "../../static/images/commodity/13.png"
        },
        "fourteen": {
            title : "西邻竺可桢的故",
            slogan : "一遇的笑意",
            price : "￥100.00",
            src : "../../static/images/commodity/14.png"
        },
        "fifteen": {
            title : "诗人能做什么",
            slogan : "那么多的美好",
            price : "￥1000.00",
            src : "../../static/images/commodity/15.png"
        },
        "thirty_three": {
            title : "那么多的美好",
            slogan : "后来会演绎这场痛",
            price : "￥181.00",
            src : "../../static/images/commodity/16.png"
        },
        "thirty_four": {
            title : "一串“黯然神伤”的",
            slogan : "只剩下相思的",
            price : "￥191.00",
            src : "../../static/images/commodity/17.png"
        },
        "thirty_six":{
            title : "只剩下相思的",
            slogan : "天的记忆，",
            price : "￥161.00",
            src : "../../static/images/commodity/18.png"
        },
        "thirty_five":{
            title : "天的记忆，",
            slogan : "有了期盼",
            price : "￥981.00",
            src : "../../static/images/commodity/19.jpg"
        },
        "fifty_three":{
            title : "哪一季才是你的",
            slogan : "而不得的苦楚。",
            price : "￥36210.00",
            src : "../../static/images/commodity/20.jpg"
        },
        "thirty_seven":{
            title : "着想你的念",
            slogan : "么期待则饱含着爱",
            price : "￥1770.00",
            src : "../../static/images/commodity/21.jpg"
        },
        "thirty_night":{
            title : "么期待则饱含着爱",
            slogan : "得顺利吗？",
            price : "￥1660.00",
            src : "../../static/images/commodity/22.jpg"
        },
        "thirty_nine":{
            title : "得顺利吗？",
            slogan : "至，她曾在一本旅游杂志",
            price : "￥1530.00",
            src : "../../static/images/commodity/23.jpg"
        },
        "forty":{
            title : "至，她曾在一本旅游杂志",
            slogan : "炉霍—翁达镇最后抵",
            price : "￥9540.00",
            src : "../../static/images/commodity/24.jpg"
        },
        "forty_one":{
            title : "炉霍—翁达镇最后抵",
            slogan : "龙—邓生保护站",
            price : "￥9530.00",
            src : "../../static/images/commodity/25.jpg"
        },
        "forty_two":{
            title : "龙—邓生保护站",
            slogan : "手一挥，说，小姑娘孤身上",
            price : "￥9650.00",
            src : "../../static/images/commodity/26.jpg"
        },
        "forty_three":{
            title : "手一挥，说，小姑娘孤身上",
            slogan : "堰—映秀—卧龙—邓生",
            price : "￥8710.00",
            src : "../../static/images/commodity/27.jpg"
        },
        "forty_five": {
            title : "堰—映秀—卧龙—邓生",
            slogan : "比；她爱笑，性格随意聪慧；刚到",
            price : "￥8740.00",
            src : "../../static/images/commodity/28.jpg"
        },
        "forty_six": {
            title : "色达方向进不去了。于",
            slogan : "，那时的她穿着砖红的",
            price : "￥8700.00",
            src : "../../static/images/commodity/29.jpg"
        },
        "fifty": {
            title : "，那时的她穿着砖红的",
            slogan : "到高原地区",
            price : "￥36500.00",
            src : "../../static/images/commodity/30.jpg"
        },
        "fifty_one": {
            title : "到高原地区",
            slogan : "出放晴。",
            price : "￥9680.00",
            src : "../../static/images/commodity/31.jpg"
        },
        "fifty_two": {
            title : "出放晴。",
            slogan : "把她拉了起来",
            price : "￥8570.00",
            src : "../../static/images/commodity/32.jpg"
        },
        "twenty":{
            title : "把她拉了起来",
            slogan : "她咯咯咯地笑开了。她",
            price : "￥2140.00",
            src : "../../static/images/commodity/33.jpg"
        },
        "twenty-one":{
            title : "她咯咯咯地笑开了。她",
            slogan : "她肆意地旋转、飞舞，",
            price : "￥7810.00",
            src : "../../static/images/commodity/34.jpg"
        },
        "twenty-two":{
            title : "她肆意地旋转、飞舞，",
            slogan : "趔趄撞进了他怀里",
            price : "￥6520.00",
            src : "../../static/images/commodity/35.jpg"
        },
        "twenty-there":{
            title : "趔趄撞进了他怀里",
            slogan : "，赶紧去吃饭",
            price : "￥2850.00",
            src : "../../static/images/commodity/7.png"
        },
        "twenty-four":{
            title : "，赶紧去吃饭",
            slogan : "份去嘉阳。看穿？",
            price : "￥570.00",
            src : "../../static/images/commodity/16.png"
        },
        "twenty-six":{
            title : "份去嘉阳。看穿？",
            slogan : "，她一脸尴尬地抬起",
            price : "￥390.00",
            src : "../../static/images/commodity/3.png"
        },
        "twenty-seven":{
            title : "，她一脸尴尬地抬起",
            slogan : "晃拥挤，他牢牢地将她",
            price : "234.00",
            src : "../../static/images/commodity/8.png"
        },
        "twenty-eight":{
            title : "晃拥挤，他牢牢地将她",
            slogan : "这一刻般想赖上一个",
            price : "￥5870.00",
            src : "../../static/images/commodity/9.png"
        },
        "twenty-nine":{
            title : "这一刻般想赖上一个",
            slogan : "就再也回不",
            price : "￥210.00",
            src : "../../static/images/commodity/15.png"
        },
        "thirty":{
            title : "就再也回不",
            slogan : "项合同金额好几百万的",
            price : "￥4550.00",
            src : "../../static/images/commodity/18.png"
        },
        "fifty_four": {
            title : "项合同金额好几百万的",
            slogan : "有了女朋友，",
            price : "￥130.00",
            src : "../../static/images/commodity/16.png"
        },
        "fifty_five": {
            title : "有了女朋友，",
            slogan : "一辈子。",
            price : "￥1000.00",
            src : "../../static/images/commodity/1.png"
        }
    }
    let {values} = Object;
    for(let val of values(data) ){
        await new Promise((resolve,reject) => {
            const _Commodity = new Commodity(val);
            _Commodity.save((err,data) => {
                if( err ){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        }).then(data => {
            ctx.body = "ok";
        }).catch(err => {
            console.log(err);
        })
    }
}

//product  商品信息
exports.product = async ctx => {
    await new Promise((resolve,reject) => {
        Commodity.find((err,data) => {
            if(err)return reject(err);
            resolve(data);
        })
    }).then(data => {
        ctx.body = data;
    }).catch(err => {
        console.log(err);
    })
}

//商品详情
exports.details = async ctx => {
    let _id = ctx.params.id;
    await new Promise((resolve,reject) => {
        Commodity.find({_id},(err,data) => {
            if(err) return reject(err);
            resolve(data);
        })
    }).then( async data => {
        ctx.body = data[0];
    }).catch(async err => {
        console.log(err);
    })
}
