import express from 'express';
const router = express.Router();
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, Auth-Token, X-Requested-With, Content-Type, Accept, X-Access-Token, Authorization, Token")
    res.header('Access-Control-Allow-Credentials', true);
    next();
})

export default router;
