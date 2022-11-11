/**
 * Include modules
 */
const { writeFile, existsSync, mkdirSync } = require('fs');
const { join } = require('path');
const config = require('../config/configuration.json');

/**
* Create a new directory to store combined images (if not exists)
* Returns the file path
*/
exports.getFilePath = () => {

    if (!existsSync(config.dir)) mkdirSync(config.dir);

    /**
     * Generate file path to save the combined image
     */
    return join(process.cwd(), `${config.dir}/${config.combinedFileName}.${config.combinedFileType}`);
}

/**
 * Save/Write File in the directory
 * Returns the success or error message
 */
exports.saveFile = (data, filePath) => {

    if (!filePath) filePath = this.getFilePath()

    writeFile(filePath, data, config.encoding, (err) => {
        if (err) {
            console.log(err);
            return 'File not combined, please contact system administrator for more details';
        }

        console.log('The file was saved!');
        return `The file was saved. Path: ${filePath}`;
    });
}
