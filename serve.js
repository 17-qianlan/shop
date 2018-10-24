const Koa = require("koa"),
    koaBody= require("koa-body"),
    cross = require("@koa/cors");

const Router = require("koa-router");


const app = new Koa();
const router = require("./serve/router/router.js");

app.use(cross());
app.use(koaBody());

//app.use("/api",childRouter.routes(),childRouter.allowedMethods());

app.use(router.routes()).use(router.allowedMethods());


app.listen(3000);

