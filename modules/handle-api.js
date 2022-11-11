/**
 * Include modules
 */
const request = require('request-promise');

/**
  * Call CAAS API (or any apis - generic)
  * Returns the API response
  */
exports.callApi = async (imageObject) => {
    let res = await request(imageObject);

    return  res;
}
