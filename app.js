/**
 * Include modules
 */
const config = require('./config/configuration.json');
const image = require('./controllers/image.controller');

/**
 * Generate query params
 */
const queryParams = `?width=${config.width}&height=${config.height}&color=${config.color}&s=${config.size}`;

/**
 * Maintain the request options in same place as an array
 * Returns request objects array - url & encoding type
 */
const requestObjects = config.imageTextContents.map(greeting => {
    return {
        url: config.baseUrl + greeting + queryParams
        , encoding: config.encoding
    }
});

/**
 * Blend/combine images to the given configuration
 * Entry point
 */
image.processImages(requestObjects);