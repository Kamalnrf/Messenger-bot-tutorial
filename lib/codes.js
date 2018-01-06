/**
*   Created by kamalnrf
*/

'use strict'

function genStatic (){
    return sendRequest({
        type: "standard",
        image_size: 1000
    })
}

function genParam (ref){
    return sendRequest({
        type: "standard",
        data: {
            ref: ref
        },
        image_size: 1000
    })
}

function sendRequest(body) {
    return new Promise ((resolve, reject) => {
        const url = "https://graph.facebook.com/v2.6/me/messenger_codes?access_token=<ACCESS_TOKEN>"
        axios.post(url, body)
            .then(response => {
                resolve(response.data.uri)
            }).catch (error => {
                console.error('Error sending message: ', error)
                resolve(false)
            })
    })
}
