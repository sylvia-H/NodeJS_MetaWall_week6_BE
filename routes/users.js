var express = require('express');
var router = express.Router();
const asyncErrorHandler = require('../helper/asyncErrorHandler');
const UserController = require('../controllers/users');

router.get(
  '/',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '取得所有用戶資訊 API'
   */
  asyncErrorHandler(UserController.getUsers)
);

router.get(
  '/:id',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '取得單一用戶資訊 API'
   */
  asyncErrorHandler(UserController.getUsers)
);

router.post(
  '/',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '新增單筆用戶資訊 API'
   */
  asyncErrorHandler(UserController.createUsers)
);

router.delete(
  '/',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '刪除所有用戶資訊 API'
   */
  asyncErrorHandler(UserController.deleteAllUsers)
);

router.delete(
  '/:id',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '刪除單一用戶資訊 API'
   */
  asyncErrorHandler(UserController.deleteUsers)
);

router.patch(
  '/:id',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '修改單一用戶資訊 API'
   */
  asyncErrorHandler(UserController.editUsers)
);

module.exports = router;
