const Images = require('../../model/image.model');

module.exports.DisplayImage = async (req, res) => {
    try {
       const  allImage = await  Images.findAll();
       const response = {
        status : 200,
        Message : 'Records Found......',
        Data : allImage
       }
       res.send(response);
    } catch {
        const response = {
            status : 500,
            Message : 'Records not Found......',
            Data : ''
           }
           res.send(response);
    }
}

module.exports.SaveImages = async (req, res) => {

    try {

        //for single image.................

        const imageData = {
            image: req.file.filename
        }

        await Images.create(imageData);

        let response = {
            status: 200,
            Message: 'images Inserted Successfully.....',
            Data: imageData
        }
        res.send(response);


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

        //for multiple images.................... 

        // const image = [];
        // const coverimage = [];

        // (req.files).filter((v, i) => {
        //     if (v.fieldname == 'image') {
        //         image.push(v.filename);
        //     } else if (v.fieldname == 'coverimage') {
        //         coverimage.push(v.filename);
        //     }
        // })
        // const imageData = {
        //     image : JSON.stringify(image),
        //     coverimage : JSON.stringify(coverimage)
        // }
        //  await Images.create(imageData);

        // let response = {
        //     status: 200,
        //     Message: 'images Inserted Successfully.....',
        //     Data : imageData
        // }
        // res.send(response);
    }
    catch {
        response = {
            status: 200,
            Message: 'error while Inserting images.....',
        }
        res.send(response);
    }
} 