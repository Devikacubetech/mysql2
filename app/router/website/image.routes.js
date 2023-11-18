const router = require('express').Router();
const Images = require('../../controller/website/image.controller');
const upload = require('../../config/multer');

module.exports = (app) => {
    router.get('/', Images.DisplayImage);

    // for single image
    // router.post('/saveimage',upload.single('image') ,Images.SaveImages); 

    // for two different image
    // router.post('/saveimage', upload.fields([{ name: 'image' }, { name: 'coverimage' }]), Images.SaveImages)

    // for multiple images 
    router.post('/saveimage', upload.array('image',2),upload.array('coverimage',2), Images.SaveImages)

    app.use('/api/website/image', router);
}
