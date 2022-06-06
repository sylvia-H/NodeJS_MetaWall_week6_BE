var express = require('express');
var router = express.Router();
const asyncErrorHandler = require('../helper/asyncErrorHandler');
const CommentController = require('../controllers/comments');

router.get(
  '/',
  /**
   * #swagger.tags = ['Comments - 貼文評論']
   * #swagger.description = '取得所有貼文評論資訊 API'
   */
  asyncErrorHandler(CommentController.getComments)
);

router.post(
  '/',
  /**
   * #swagger.tags = ['Comments - 貼文評論']
   * #swagger.description = '新增單筆貼文評論資訊 API'
   */
  asyncErrorHandler(CommentController.createComments)
);

router.delete(
  '/',
  /**
   * #swagger.tags = ['Comments - 貼文評論']
   * #swagger.description = '刪除所有貼文評論資訊 API'
   */
  asyncErrorHandler(CommentController.deleteAllComments)
);

router.delete(
  '/:id',
  /**
   * #swagger.tags = ['Comments - 貼文評論']
   * #swagger.description = '刪除單筆貼文評論資訊 API'
   */
  asyncErrorHandler(CommentController.deleteComments)
);

router.patch(
  '/:id',
  /**
   * #swagger.tags = ['Comments - 貼文評論']
   * #swagger.description = '修改單筆貼文評論資訊 API'
   */
  asyncErrorHandler(CommentController.editComments)
);

module.exports = router;
