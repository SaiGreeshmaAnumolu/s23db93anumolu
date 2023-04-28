var express = require('express');
const cap_controlers= require('../controllers/cap');
var router = express.Router();

/* GET home page. */
router.get('/', cap_controlers.cap_view_all_Page );

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}   
/* GET create update page */
router.get('/update',secured, cap_controlers.cap_update_Page);
/* GET detail cap page */
router.get('/detail',cap_controlers.cap_view_one_Page);

/* GET create cap page */
router.get('/create',secured, cap_controlers.cap_create_Page);


/* GET delete cap page */
router.get('/delete',secured, cap_controlers.cap_delete_Page);

module.exports = router;