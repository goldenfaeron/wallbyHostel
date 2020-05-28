const fetch = require('node-fetch')
require('dotenv').config({ path: '.env.example' })



const API_ENDPOINT = 'https://cockpit.goborshi.hackmylanguage.com/api/collections/get/'
const API_KEY = process.env.COLLECTIONS_API_KEY

exports.handler = async (event, context) => {
    let fields = JSON.parse(event.body)
    let name = event.queryStringParameters.name;
    let skip = event.queryStringParameters.skip;
    let limit = event.queryStringParameters.limit;

    const res = await fetch(API_ENDPOINT + name + '?token=' + "641a6e0c88f94f7d2adadd184752e1&rspc=1", {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            limit: limit, skip: skip, fields: fields
        })
    })
        .then((response) => response.text())
        .then((data) => ({
            statusCode: 200,
            body: data,
        }))
        .catch((error) => ({ statusCode: 422, body: String(error) }))
    return res
}



// const API_ENDPOINT = 'https://cockpit.goborshi.hackmylanguage.com/api/collections/get/airbnb?token=641a6e0c88f94f7d2adadd184752e'