const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    var num1 = Math.random()+1; //just to make sure num1 value is greater then 1
    var num2 = Math.random()+1; //just to make sure num2 value is greater then 1
    const absvalue = Math.abs(num1 - num2);
    
    num1 = Math.min(Math.max(num1, -1), 1);
    const acosresult = Math.acos(num1);

    const sinresult = Math.sin(num1)
    res.send(`Math.abs(num1 - num2) applied to ${num1} and ${num2} is ${absvalue}<br>
    Math.acos(num1) applied to ${num1} is ${acosresult} <br>
    Math.sin(num1) applied to ${num1} is ${sinresult} <br>
    `);

});

module.exports = router;
