/**
*   Created by kamalnrf
*/

'use strict'

const axios = require('axios')

// To send basic text message
function sendTextMessage (recipientID, text) {
    const recipient =   { id: recipientID }
    const message = { text: text }
    return sendRequest({
        recipient,
        message
    })
}

// To send attachments from url
function sendAttacment (recipientID, type, url) {
    const recipient = { id: recipientID}
    const message = {
        attachement: {
            type: type,
            payload: {
                url: url
            }
        }
    }

    return sendRequest({
        recipient,
        message
    })
}

// To send a quick reply
function sendQuickReply (recipientID, message, quikReplies){
    const recipient = { id: recipientID }
    const message = {
        text: message,
        quick_replies: {
            quikReplies
        }
    }

    return sendRequest({
        recipient,
        message
    })
}

function sendRequest(body) {
    return new Promise ((resolve, reject) => {
        const url = "https://graph.facebook.com/v2.6/me/messages?access_token={access_token}"
        axios.post(url, body)
            .then(response => {
                resolve(true)
            }).catch (error => {
                console.error('Error sending message: ', error)
                resolve(false)
            })
    })
}

function _createRecipientID (recipientID) {
    return
}
