const express = require('express');
const router = express.Router();
const { analyzeCode } = require('../controllers/codeController');

router.post('/', analyzeCode);

module.exports = router;