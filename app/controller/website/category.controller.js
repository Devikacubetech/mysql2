const Category = require('../../model/category.model');
// const sulgify = require('slugify');

module.exports.displayCategory = async (req, res) => {
  await Category.findAll({
    where: {
      deleted_at: null,
    }
  }).then((categories) => {
    let response = {
      status: 200,
      Message: "Categories Record Found Successfully.....",
      Data: categories
    }

    res.status(200).send(response);

  }).catch((error) => {
    let response = {
      status: 500,
      Message: "Error while retrieving Categories.....",
      Data: '',
      error: error.message
    }

    res.status(500).json(response);
  })
}

module.exports.createCategory = async (req, res) => {
  const categoryData = {
    name: req.body.name,
    slug: req.body.slug,
    parent_id: req.body.parent_id
  }

  if (!req.params.id) {
    await Category.create(categoryData).then((result) => {
      let response = {
        status: 200,
        Message: "Categories Record Created Successfully.....",
        Data: result
      }

      res.status(200).send(response);
    }).catch((error) => {
      response = {
        status: 500,
        Message: "Error while Creating Categories.....",
        Data: '',
        error: error.message
      }

      res.status(500).send(response);
    })
  } else {
    await Category.update(categoryData, {
      where: { id: req.params.id }
    })
      .then(([updatedCount, updatedCategory]) => {
        if (updatedCount === 1) {
          const response = {
            status: 200,
            message: 'Category Updated Successfully',
            data: updatedCategory
          };

          res.status(200).json(response);
        } else {
          const response = {
            status: 404,
            message: 'Category not found',
            data: ''
          };

          res.status(404).json(response);
        }
      })

      .catch((error) => {
        let response = {
          status: 500,
          Message: 'Error while updating Category',
          Data: '',
          error: error.message,
        };
        res.status(500).send(response);
      });
  }


}

module.exports.deleteCategory = async (req, res) => {
  const { ids } = req.params;
  if (!ids) {
    response = {
      status: 400,
      Message: 'No category IDs provided for deletion',
      Data: null,
    };
    return res.status(400).send(response);
  }
  else {
    const categoryIds = ids.split(',').map((id) => parseInt(id, 10));
    const deleteData = {
      deleted_at: new Date(),
    };
    await Category.update(deleteData, {
      where: { id: categoryIds, deleted_at: null }
    })
      .then((result) => {
        let response = {
          status: 200,
          Message: 'Category Deleted Successfully..',
          Data: result,
        };

        res.status(200).send(response);
      })
      .catch((error) => {
        let response = {
          status: 500,
          Message: 'Error while Deleting Category',
          Data: '',
          error: error.message,
        };

        res.status(500).send(response);
      });
  }
}

module.exports.getUpdateCategory = async (req, res) => {
  const updateResult = await Category.findAll({
    where: {
      id: req.params.id,
    }
  });


  const updateData = {
    name: req.body.name,
    slug: req.body.slug,
    parent_id: req.body.parent_id,
  }

  await Category.update(updateData, {
    where: { id: req.params.id }
  })
    .then((result) => {
      let response = {
        status: 200,
        Message: 'Category Updated Successfully',
        Data: updateResult,
      };

      res.status(200).send(response);
    })
    .catch((error) => {
      let response = {
        status: 500,
        Message: 'Error while updating Category',
        Data: '',
        error: error.message,
      };

      res.status(500).send(response);
    });
}

module.exports.statusUpdate = async (req, res) => {
  const { ids } = req.params;
  if (!ids) {
    response = {
      status: 400,
      Message: 'No category IDs provided for status Update',
      Data: null,
    };
    res.status(400).send(response);
  } else {
    const categoryIds = ids.split(',').map((id) => parseInt(id, 10));
    const allCategroies = await Category.findAll({
      attributes: ['status'],
      where : {
        id : categoryIds
      }
    });
    const updateData = allCategroies.map((v, i) => {
      return {
        status: !(v.status)
      };
    })

  await Category.update(updateData,{
    where : {
      id : categoryIds
    }
  }).then((result)=> {
    response = {
      status: 400,
      Message: 'Status updated Successfully.......',
      Data: allCategroies,
      newData: result
    };
    res.status(400).send(response);
  }).catch((error)=> {
    response = {
      status: 400,
      Message: 'error',
      Data: allCategroies,
      newData: updateData
    };
    res.status(400).send(response);
  })
    
  }
}




