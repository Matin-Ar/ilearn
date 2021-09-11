var request = require('request')

const makeFolder = (folderName) => {
    return new Promise((resolve, reject) => {
        request({
            'method': 'POST',
            'url': 'https://api.parsaspace.com/v2/files/createfolder',
            'headers': {
            'Authorization': `Bearer ${process.env.PARSASPACE_TOKEN}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            'domain': process.env.PARSASPACE_DOMAIN,
            'path': `/${folderName}/`
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

const uploadDemo = (data, fileName, folderName) => {
    return new Promise((resolve, reject) => {
        request({
            'method': 'POST',
            'url': 'https://api.parsaspace.com/v2/files/upload',
            'headers': {
            'Authorization': `Bearer ${process.env.PARSASPACE_TOKEN}`
        },
        formData: {
            'domain': process.env.PARSASPACE_DOMAIN,
            'path': `/${folderName}/`,
            'file': {
                'value': data,
                'options': {
                    'filename': fileName,
                    'contentType': null
                }
            }
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

module.exports = {uploadDemo, makeFolder}
