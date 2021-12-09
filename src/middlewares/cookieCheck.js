module.exports = (req,res,next) => {
    if (req.cookies.legendSecret) {
        req.session.userLogin = req.cookies.legendSecret
    }
    next()
}