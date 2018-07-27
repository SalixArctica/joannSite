const express = require('express');
require('dotenv').load();

const sid = process.env.TWILIO_SID;
const token = process.env.TWILIO_TOKEN;

const client = require('twilio')(sid, token);



const bugRouter = express.Router();

bugRouter.post('/', (req, res) => {
  client.messages
    .create({
      body: 'BUG ON JOANN SITE \n WHAT: ' + req.body.what + '\n HOW: ' +
        req.body.how + '\n MORE: ' + req.body.more,
      from: '+19189259354',
      to: process.env.MY_NUMBER
    })
    .done();
    res.status(200).json({message: 'Thanks for the report!'});
});

module.exports = bugRouter;
