const { Router } = require('express');
const { getCites } = require('../controllers/citesC');
const router= Router();

router.get('/', getCites);


module.exports = router;