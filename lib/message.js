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

// To send action
function sendAction (recipientID, action){
    const recipient = { id: recipientID }
    const sender_action = action

    return sendRequest({
        recipient,
        sender_action
    })
}

// ------ Message Templatest -----//
function sendTemplate (recipientID, templatePayload){
    const recipient = { id: recipientID }
    const message = {
        attachement: {
            type: 'template',
            payload: templatePayload
        }
    }

    return sendRequest({
        recipient,
        message
    })
}

function sendGenericTemplate(recipientID, elements){
    return sendTemplate(recipientID, {
        template_type: 'generic',
        elements: elements
    })
}

function sendListTemplate(recipientID, elementStyle, elements, buttons){
    return sendTemplate(recipientID, {
        template_type: 'list',
        top_element_style: elementStyle,
        elements: elements,
        buttons: buttons
    })
}

function sendButtonTemplate(recipientID, text, buttons){
    return sendTemplate(recipientID, {
        template_type: 'button',
        text: text,
        buttons: buttons
    })
}

function sendOpenGraphTemplate(recipientID, elements){
    return sendTemplate(recipientID, {
        template_type: 'open_graph',
        elements: elements
    })
}

function sendMediaTemplate(recipientID, elements){
    return sendTemplate(recipientID, {
        template_type: 'media',
        elements: elements
    })
}

function  sendReceiptTemplate (recipientID, parmas){
    return sendTemplate(recipientID, {
        template_type: 'receipt',
        recipient_name: params.recipient_name,
        order_number: params.order_number,
        currency: params.currency,
        payment_method: params.payment_method,
        order_url: params.order_url,
        timestamp: params.timestamp,
        address: parmas.address,
        summary: params.summary,
        adjustments: paramas.adjustments,
        elements: params.elements
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
