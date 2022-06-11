const express = require('express');
const router = express.Router();
const asyncErrorHandler = require('../helper/asyncErrorHandler');
const PostController = require('../controllers/posts');

router.get(
  '/',
  /**
    * #swagger.tags = ['Posts - 貼文']
    * #swagger.description = '取得所有貼文 API'
    * #swagger.responses[200] = {
        description: '成功取得所有貼文內容',
        schema: { $ref: "#/definitions/getPosts_Schema" }
      }
    }
    */
  asyncErrorHandler(PostController.getPosts)
);

router.post(
  '/',
  /**
    * #swagger.tags = ['Posts - 貼文']
    * #swagger.description = '新增貼文 API'
    * #swagger.parameters['body'] = {
        in: "body",
        type: "object",
        required: true,
        description: "資料格式",
        schema: { $ref: "#/definitions/createdPosts_Schema" }
      }
    * #swagger.responses[200] = {
        description: '成功新增一篇貼文',
        schema: { $ref: "#/definitions/getPosts_Schema" }
      }
    }
  */
  asyncErrorHandler(PostController.createPosts)
);

router.delete(
  '/',
  /**
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '刪除所有貼文 API'
   * #swagger.security = [{ "api_key": [] }]
   */
  asyncErrorHandler(PostController.deleteAllPosts)
);

router.delete(
  '/:id',
  /**
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '刪除單一貼文 API'
   */
  asyncErrorHandler(PostController.deletePosts)
);

router.patch(
  '/:id',
  /**
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '修改單一貼文 API'
   */
  asyncErrorHandler(PostController.editPosts)
);

module.exports = router;
