const router = require('express').Router();
const Images = require('../../controller/website/image.controller');
const upload = require('../../libary/multer');

module.exports = (app) => {
    router.get('/', Images.DisplayImage);

    // for single image
    router.post('/saveimage',upload.single('image') ,Images.SaveImages); 

    // for two different image
    // router.post('/saveimage', upload.fields([{ name: 'image' }, { name: 'coverimage' }]), Images.SaveImages)

    // for multiple images 
    // router.post('/saveimage', upload.any(), Images.SaveImages);

    app.use('/api/website/image', router);
}
