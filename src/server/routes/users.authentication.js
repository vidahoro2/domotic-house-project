const express = require('express');
const router = express.Router();

router.get('/register-form', (req, res) => {
    res.json({message: 'register form'});
});

module.exports = router;