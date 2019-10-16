var express = require('express');
var router = express.Router();

/**
 * GET pages index
 *  */
router.get('/',function(req, res){
    res.render('index',{
        title: 'Admin pages'
    });
});

// Exports
module.exports = router;