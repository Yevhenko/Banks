const express = require('express');

const router = express.Router();

const bank = require('./bank');
const { errorHandler } = require('../handlers');

router.use(bank);
router.use(errorHandler);

module.exports = router;
