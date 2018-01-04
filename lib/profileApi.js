/**
*   Created by kamalnrf
*/

'use strict'

const axios = require('axios')

function setGetStartedButton (payload){
    return sendRequest({
        get_started: {
            payload: payload
        }
    })
}

function setPersistenMenu (menuElements, textInput){
    return sendRequest({
        persistent_menu: [
            locale: "default",
            composer_input_disabled: textInput,
            call_to_actions: menuElements
        ]
    })
}

function setAcountLinkingURL (url){
    return sendRequest({
        account_linking_url: url
    })
}

function setGreetingMessage (message){
    return sendRequest({
        greeting: [
            {
                locale: 'default',
                text: message
            }
        ]
    })
}

function sendRequest(body) {
    return new Promise ((resolve, reject) => {
        const url = "https://graph.facebook.com/v2.6/me/messenger_profile?access_token=<PAGE_ACCESS_TOKEN>"
        axios.post(url, body)
            .then(response => {
                resolve(true)
            }).catch (error => {
                console.error('Error sending message: ', error)
                resolve(false)
            })
    })
}
