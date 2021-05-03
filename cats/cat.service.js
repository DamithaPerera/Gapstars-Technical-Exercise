const repo = require('./cat.repository');
const fs = require('fs').promises;
const {join} = require('path');
const blend = require('@mapbox/blend');

/**
 * RandomCat Service
 * @param data {Object}
 * @returns {Promise<void>}
 */
const randomCatService = async (data) => {
    data['greeting'] = 'Hello'
    const firstData = await repo.randomCatRepo(data)
    data['greeting'] = 'You'
    const secondData = await repo.randomCatRepo(data)


    const res = await new Promise((resolve, reject) => {
        blend([{
            buffer: Buffer.from(firstData.body, 'binary'),
            x: 0,
            y: 0
        }, {
            buffer: Buffer.from(secondData.body, 'binary'),
            x: data.width,
            y: 0
        }], {
            width: data.width * 2,
            height: data.height,
            format: 'jpeg',
        }, (error, body) => {
            if (!error) {
                resolve(body);
            }
            reject(error);
        });
    })

    const fileOut = join(process.cwd(), `/cat-card.jpeg`);
    return fs.writeFile(fileOut, res);

};


module.exports = {
    randomCatService: randomCatService
}