# gapsters-harver-exercise

#Installation - install npm packages
npm i

#Configuration - json file to maintain the configuration details. 
{
    "dir": "./combined-image/",
    "combinedFileName": "cat-card",
    "combinedFileType": "jpg",
    "encoding": "binary",
    "baseUrl": "https://cataas.com/cat/says/",
    "width": 400,
    "height": 500,
    "color": "Pink",
    "size": 100,
    "imageTextContents": [
        "Hello",
        "You"
    ] 
}

dir - Directory name where the combined image file will be saved
combinedFileName - File name of the combined image (text)
combinedFileType - File type of the image (jpg, png, etc)
encoding - Image encoding method (binary, base64, etc)
baseUrl - Cat As a Service base url (can change it to any other similar service)
width - Image width
height - Image height
color - Text color
size - text size
imageTextContents - text which will be added in the images, maintained in an array (array length will be the image count) 

Note: considered the text will be mandatory for each image
