const request = require('request');

/**
 * Random Cat Repo
 * @param data {Object}
 * @returns {Promise<*>}
 */
const randomCatRepo = async (data) => {

    return await new Promise((resolve, reject) => {
        request.get({
            url: `https://cataas.com/cat/says/${data.greeting}?width=${data.width}&height=${data.height}&c=${data.color}&s=${data.size}`,
            encoding: 'binary'
        }, (error, body) => {
            if (!error) {
                resolve(body);
            }
            reject(error);
        });
    })

};


module.exports = {
    randomCatRepo: randomCatRepo
}