var request = require("request");

const sendsms1 = (number, randomCode) => {
    return new Promise((resolve, reject) => {
        request({ 
            method: 'POST',
            url: 'https://api.ghasedak.me/v2/verification/send/simple',
            headers:
            {
                'cache-control': 'no-cache',
                apikey: process.env.SMS_TOKEN,
                'content-type': 'application/x-www-form-urlencoded' },
            form:
            {
                receptor: number,
                template: 'activation',
                type: '1',
                param1: randomCode
            }
        }, function (error, response) {
            if (!error) {
                resolve(response.body)
            } else {
                reject(error)
            }
        })
    })
}

const sendsms2 = (number, randomCode) => {
    return new Promise((resolve, reject) => {
        request({ method: 'POST',
            url: 'https://api.ghasedak.me/v2/verification/send/simple',
            headers:
            {
                'cache-control': 'no-cache',
                apikey: process.env.SMS_TOKEN,
                'content-type': 'application/x-www-form-urlencoded' },
            form:
            {
                receptor: number,
                template: 'verification',
                type: '1',
                param1: randomCode
            }
        }, function (error, response) {
            if (!error) {
                resolve(response.body)
            } else {
                reject(error)
            }
        })
    })
}

module.exports = {sendsms1, sendsms2}
