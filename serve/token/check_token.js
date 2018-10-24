const jwt = require("jsonwebtoken");

/*module.exports = async (ctx,next) => {

}*/

module.exports = async ( ctx, next ) => {
    const authorization = ctx.get('Authorization');
    if ( authorization === '' ) {
        ctx.throw(401, 'no token detected in http header Authorization 没有token');
    }
    const token = authorization.split(' ')[1];
    let tokenContent;
    try {
        console.log(token);
        tokenContent = await jwt.verify(token, 'sinner77');     //如果token过期或验证失败，将抛出错
    } catch (err) {
        ctx.throw(401, 'invalid token token过期');
    }
    await next();
}
