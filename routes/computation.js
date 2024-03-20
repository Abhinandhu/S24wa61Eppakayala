const express = require('express');
const router = express.Router();
var num1 = Math.random();
var num2 = Math.random();
router.get('/', function(req, res) {
    const difference = Math.abs(num1 - num2);
    res.send(`The function Math.abs with numbes ${num1} and ${num2} returns ${difference}`);
});
router.get('/', function(req, res) {
    res.send('Respond with a resource');
});

module.exports = router;
