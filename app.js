/**
*   Created by kamalnrf
*/

'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// for facebook verification
app.get('/webhook',  (req, res) => {
	if (req.query['hub.verify_token'] === 'verify_me') {
		res.send(req.query['hub.challenge'])
	} else {
		res.send('Error, wrong token')
	}
})

app.post('/webhook', (req, res) => {
    const data = req.body;

    if (data.object !== 'page')
        return;

    handleFacebookData(data)
    // Must send back a 200 within 20 seconds or the request will time out.
    res.sendStatus(200);
})

function handleFacebookData (data){
    // Iterate over each entry. There may be multiple if batched.
    data.entry.forEach((entry) => {
      // Iterate over each messaging event
      entry.messaging.forEach((event) => {
        if (event.message && event.message.is_echo && !this.broadcastEchoes) {
          return;
        }
        if (event.message && event.message.text) {
		    const text = event.message.text
		    // Handle your message with any of the functions in lib/message.js
	    }
		if (event.message && event.message.quick_reply){
			const payload = event.messsage.quick_reply
			// Handle your message with any of the functions in lib/message.js
		}
      });
    });
}
