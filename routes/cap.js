var express = require('express');
const cap_controlers= require('../controllers/cap');
var router = express.Router();

/* GET home page. */
router.get('/', cap_controlers.cap_view_all_Page );
/* GET detail cap page */
router.get('/detail', cap_controlers.cap_view_one_Page);

module.exports = router;
/* GET create cap page */
router.get('/create', cap_controlers.cap_create_Page);
/* GET create update page */
router.get('/update', cap_controlers.cap_update_Page);
/* GET delete cap page */
router.get('/delete', cap_controlers.cap_delete_Page);