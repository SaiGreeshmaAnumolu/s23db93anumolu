var cap = require('../models/cap');
// List of all cap
exports.cap_list = function(req, res) {
 res.send('NOT IMPLEMENTED: cap list');
};
// for a specific cap.
exports.cap_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: cap detail: ' + req.params.id);
};
// Handle cap create on POST.
exports.cap_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: cap create POST');
};
// Handle cap delete form on DELETE.
exports.cap_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: cap delete DELETE ' + req.params.id);
};
// Handle cap update form on PUT.
exports.cap_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: cap update PUT' + req.params.id);
};