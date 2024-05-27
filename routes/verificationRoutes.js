const express = require('express');
const router = express.Router();
const { getAllVerifications, createVerification } = require('../controllers/verificationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, getAllVerifications);
router.post('/', authMiddleware, createVerification);

module.exports = router;
