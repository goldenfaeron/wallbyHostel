const fetch = require('node-fetch')
require('dotenv').config({ path: '.env.example' })



const API_ENDPOINT = 'https://cockpit.goborshi.hackmylanguage.com/api/collections/get/'
// const value = data.val



exports.handler = async (event, context) => {
    // const data = JSON.parse(event.body)
    const res = await fetch(API_ENDPOINT + event.body + '?token=' + process.env.COLLECTIONS_API_KEY, {

        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            fields: { name: 1 }
        })
    })
        .then((response) => response.text())
        .then((data) => ({
            statusCode: 200,
            body: `AWS IP is ${data}`,
        }))
        .catch((error) => ({ statusCode: 422, body: String(error) }))
    return res
}



// const API_ENDPOINT = 'https://cockpit.goborshi.hackmylanguage.com/api/collections/get/airbnb?token=641a6e0c88f94f7d2adadd184752e1'