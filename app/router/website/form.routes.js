const router = require('express').Router();
const FormRoute = require('../../controller/website/form.controller');

module.exports = (app) => {
    router.get('/save:id?', FormRoute.SaveData);
    app.use('/api/website/form', router);
}