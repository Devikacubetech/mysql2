const Images = require('../../model/image.model');

module.exports.DisplayImage = async (req, res) => {
    res.send('display All Images..');
}

module.exports.SaveImages = async (req, res) => {

    try {

        //for two different images..............

        // const { image, coverimage } = req.files;
        // const imageData = {
        //   image: image[0].filename,
        //   coverimage: coverimage[0].filename
        //   singleimage : req.file.filename (for single image)

        // }
        // await Images.create(imageData);

        // let response = {
        //     status: 200,
        //     Message: 'images Inserted Successfully.....',
        //     Data : imageData
        // }
        // res.send(response);

        //for multiple images 

        const image = [];
        const coverimage = [];

        (req.files).filter((v, i) => {
            if (v.fieldname == 'image') {
                image.push(v.filename);
            } else if (v.fieldname == 'coverimage') {
                coverimage.push(v.filename);
            }
        })
        const imageData = {
            image : JSON.stringify(image),
            coverimage : JSON.stringify(coverimage)
        }
         await Images.create(imageData);

        let response = {
            status: 200,
            Message: 'images Inserted Successfully.....',
            Data : imageData
        }
        res.send(response);
    }
    catch {
        response = {
            status: 200,
            Message: 'error while Inserting images.....',
        }
        res.send(response); 
        // res.send('error....')
    }
} 