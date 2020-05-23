const fetch = require('node-fetch')

const API_ENDPOINT = 'https://cockpit.goborshi.hackmylanguage.com/api/collections/get/airbnb?token=641a6e0c88f94f7d2adadd184752e1'

exports.handler = async (event, context) => {
    const res = await fetch(API_ENDPOINT)
        .then((response) => response.text())
        .then((data) => ({
            statusCode: 200,
            body: `AWS IP is ${data}`,
        }))
        .catch((error) => ({ statusCode: 422, body: String(error) }))
    return res
}



// const API_ENDPOINT = 'https://cockpit.goborshi.hackmylanguage.com/api/collections/get/airbnb?token=641a6e0c88f94f7d2adadd184752e1'