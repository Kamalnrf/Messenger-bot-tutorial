/**
 * Created by kamalnrf
 */

 'use strict'

 const axios = require('axios')

 function enableNlP(){
     return new Promise{
         const url ="https://graph.facebook.com/v2.8/me/nlp_configs?nlp_enabled=$NLP_ENABLED"

         axios.post(url, {
             access_token = "<ACCESS_TOKEN>"
         })
         .then (reponse => {
             resolve(true)
         }).catch(error => {
             reject(error)
         })
     }
 }

function customToken (){
     return new Promise{
         const url ="https://graph.facebook.com/v2.8/me/nlp_configs?nlp_enabled=$NLP_ENABLED"

        axios.post(url, {
            access_token = "<ACCESS_TOKEN>"
        })
        .then (reponse => {
            resolve(true)
        }).catch(error => {
            reject(error)
        }) 
     }
}
