const Router = require("koa-router");

const router = new Router;

const user = require("../control/user"),
    checkToken = require("../token/check_token"),
    commodity = require("../control/commodity"),
    shopping = require("../control/shopping")

router.get("/ss",commodity.ss);

router.get("/user/product", commodity.product);

router.get("/user/details/:id", commodity.details);

// router.use(async function(ctx,next){
//     await next();
// })
router.post("/user/login",user.login);

router.post("/user/res",user.res);

router.post("/user/shopCar",shopping.joinCar);

router.get("/user/getCar",shopping.getCar);

router.get("/user/getCount",shopping.getCount);

router.get("/user/shopCount",shopping.shopCount);



router.post("/user/change",shopping.sendChange);




module.exports = router;
