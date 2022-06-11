const express = require('express');
const router = express.Router();
const asyncErrorHandler = require('../helper/asyncErrorHandler');
const { isAuth, isAdmin } = require('../helper/auth');
const UserController = require('../controllers/users');

router.post(
  '/sign_up',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '使用者註冊 API'
   */
  asyncErrorHandler(UserController.signUp)
);

router.post(
  '/sign_in',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '使用者登入 API'
   */
  asyncErrorHandler(UserController.signIn)
);

router.post(
  '/updatePassword',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '使用者修改密碼 API'
   */
  isAuth,
  asyncErrorHandler(UserController.updatePassword)
);

router.get(
  '/profile',
  /**
   * #swagger.tags = ['Users - 用戶']
   * #swagger.description = '使用者取得個人檔案頁資料 API'
   */
  isAuth,
  asyncErrorHandler(UserController.getProfile)
);

router.get(
  '/',
  /**
   * #swagger.tags = ['後台：Users - 用戶']
   * #swagger.description = '取得所有用戶資訊 API'
   * #swagger.security = [{ "api_key": [] }]
   */
  isAuth,
  isAdmin,
  asyncErrorHandler(UserController.getUsers)
);

router.get(
  '/:id',
  /**
   * #swagger.tags = ['後台：Users - 用戶']
   * #swagger.description = '取得單一用戶資訊 API'
   * #swagger.security = [{ "api_key": [] }]
   */
  asyncErrorHandler(UserController.getUsers)
);

router.post(
  '/',
  /**
   * #swagger.tags = ['後台：Users - 用戶']
   * #swagger.description = '新增單筆用戶資訊 API'
   * #swagger.security = [{ "api_key": [] }]
   */
  isAuth,
  isAdmin,
  asyncErrorHandler(UserController.createUsers)
);

router.delete(
  '/',
  /**
   * #swagger.tags = ['後台：Users - 用戶']
   * #swagger.description = '刪除所有用戶資訊 API'
   * #swagger.security = [{ "api_key": [] }]
   */
  isAuth,
  isAdmin,
  asyncErrorHandler(UserController.deleteAllUsers)
);

router.delete(
  '/:id',
  /**
   * #swagger.tags = ['後台：Users - 用戶']
   * #swagger.description = '刪除單一用戶資訊 API'
   * #swagger.security = [{ "api_key": [] }]
   */
  isAuth,
  isAdmin,
  asyncErrorHandler(UserController.deleteUsers)
);

router.patch(
  '/:id',
  /**
   * #swagger.tags = ['後台：Users - 用戶']
   * #swagger.description = '修改單一用戶資訊 API'
   * #swagger.security = [{ "api_key": [] }]
   */
  isAuth,
  isAdmin,
  asyncErrorHandler(UserController.editUsers)
);

module.exports = router;
