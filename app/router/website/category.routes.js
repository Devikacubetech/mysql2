const express = require('express');
const router = express.Router();

const CategoryController = require('../../controller/website/category.controller');

module.exports = (app) => {
  router.get('/display', CategoryController.displayCategory);
  router.post('/create/:id?',CategoryController.createCategory);
  router.delete('/delete/:ids?',CategoryController.deleteCategory);
  router.get('/statusupdate/:ids?',CategoryController.statusUpdate);
  router.get('/getupdatedata/:id',CategoryController.getUpdateCategory);
  app.use('/api/website/categories',router);
}