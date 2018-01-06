/**
*   Created by kamalnrf
*/

'use strict'

const axios = require('axios')

function createBroadcast (message){
  return new Promise((resolve, reject) => {
    const url = "https://graph.facebook.com/v2.11/me/message_creatives?access_token=<TOKEN>"
    axios.post(url, {
      messages: [message]
    })
      .then(response => {
        resolve(true)
      }).catch (error => {
      console.error('Error sending message: ', error)
      resolve(false)
    })
  })
}

async function sendBroadCast (message){
  return new Promise((resolve, reject) => {
    const url = "https://graph.facebook.com/v2.11/me/broadcast_messages?access_token=<TOKEN>"
    axios.post(url, {
      message_creative_id : createBroadcast(message),
      notification_type : "REGULAR"
    })
      .then(response => {
        resolve(true)
      }).catch (error => {
      console.error('Error sending message: ', error)
      resolve(false)
    })
  })
}
