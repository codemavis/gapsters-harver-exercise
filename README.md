# Cat Card Application 

Bind multiple images and generate one single image.

## Description

The application uses Cat as a Service (https://cataas.com) and does the following:
* Fetches an image of a cat with some custom text
* Fetches an image of another cat with some more custom text 
* Binds these images together into one image
* Saves the resulting image as a file

## Getting Started

### Dependencies

* Install node.js & npm (if you have already installed, skip this step)


### Installation

* Clone the git repository and open in a code editor (Eg: VSCode)
* Update the config.json file to maintain/change the configuration details.
* In the root folder install the packages
```
npm install
```


### Configuration

JSON file to maintain the configuration details. 

```
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
```

* dir - Directory name where the combined image file will be saved
* combinedFileName - File name of the combined image (text)
* combinedFileType - File type of the image (jpg, png, etc)
* encoding - Image encoding method (binary, base64, etc)
* baseUrl - Cat As a Service base url (can change it to any other similar service)
* width - Image width
* height - Image height
* color - Text color
* size - text size
* imageTextContents - text which will be added in the images, maintained in an array (array length will be the image count) 


### Note: 

Considered the text will be mandatory for each image


### Executing program

* Main file is app.js
* Go to the root folder of the application and run the following code
```
node app.js
```

### Application output

The combined image will be saved under a new folder named combined-image


## Author

Contributor name and contact info

* Sujee Sathasivam - https://github.com/codemavis


