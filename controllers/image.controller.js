/**
 * Include modules
 */
const blend = require('@mapbox/blend');
const config = require('../config/configuration.json');
const fileOps = require('../modules/file-ops');
const handleApi = require('../modules/handle-api');

/**
 * Combine the images
 * Returns an image
 */
const _blendImages = (images) => {

    console.log('images.length', images.length);

    if (images.length > 0) {
        try {
            blend(
                images
                , {
                    width: config.width * images.length,
                    height: config.height,
                    format: config.combinedFileType,
                }, (err, data) => {

                    if (err) {
                        console.log(err);
                        return;
                    }

                    //Get file path & save file
                    fileOps.saveFile(data.toString('binary'), fileOps.getFilePath());
                });

        } catch (error) {
            console.log('error', error);
        }
    }
}

/**
 * Get images  
 * Returns an array of images
 */
const _getImages = async (requestObjects) => {
    let images = [];

    for (let i = 0; i < requestObjects.length; i++) {
        images.push(await handleApi.callApi(requestObjects[i]))
    }
    return await images;
}


/** 
 * Position the image
 * Returns an object of image and x, y positions
 */
const _getBlendPosition = (images) => {

    console.log('images', images);

    return  images.map((image, i) => {
        return { buffer: Buffer.from(image, config.encoding), x: i * config.width, y: 0 }
    });

}

/** 
 * Image processing Steps
 * 1. Call api and get maintain the images in an array 
 * 2. Get image positions (x, y positions) to blend
 * 3. Blend/merge the the images
 * 
 */
exports.processImages = async (requestObjects) => {
    let images = await _getImages(requestObjects)
        , blendObject = _getBlendPosition(images);
    _blendImages(blendObject);
}