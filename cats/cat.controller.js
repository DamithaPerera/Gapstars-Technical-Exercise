const service = require('./cat.service');

/**
 * RandomCatPost controller
 * @returns {Promise<void>}
 */
const randomCatPost = async () => {

    const data = {width: 400, height: 500, color: 'Pink', size: 100}
    try {
        await service.randomCatService(data);
        console.log("The file was saved!");
    } catch (e) {
        console.log('error=>', e)
    }
};

module.exports = {
    randomCatPost: randomCatPost
}