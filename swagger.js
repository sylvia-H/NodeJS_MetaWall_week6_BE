const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'MetaWall API',
    description: 'MetaWall 元宇宙社交圈 API 文件',
  },
  host: 'localhost:3000',
  schemes: ['http', 'https'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'headers',
      name: 'authorization',
      description: '請加上 API Token',
    },
  },
  securityDefinitions: {
    api_key: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'X-API-KEY', // name of the header, query parameter or cookie
      description: 'system administrators\'s access permission'
    }
  },
  definitions: {
    getPosts_Schema: {
      _id: '6298cd452f75e1bf5c347d55',
      author: {
        _id: '6298bdcc86d7d2a709c289e1',
        name: '波吉',
        avatar:
          'https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg',
      },
      content: '我一定要成為很棒棒的國王！',
      tags: ['general'],
      image:
        'https://images.unsplash.com/photo-1499026008573-50eedca8407b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
      likes: 0,
      comments: [
        {
          _id: '6299d7788e41247531c5b899',
          articleID: '6298cd452f75e1bf5c347d55',
          author: '6298bb7386d7d2a709c289de',
          body: '加油～你可以的！',
          createdAt: '2022-06-03T09:42:16.882Z',
          updatedAt: '2022-06-03T09:42:16.882Z',
        },
      ],
      privacy: 'private',
      createdAt: '2022-06-02T14:46:29.020Z',
      updatedAt: '2022-06-03T10:16:29.092Z',
    },
    createdPosts_Schema: {
      $author: '6298bdcc86d7d2a709c289e1',
      $content: '我一定要成為很棒棒的國王！',
      tags: ['general'],
      image:
        'https://images.unsplash.com/photo-1499026008573-50eedca8407b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
      privacy: 'private',
    },
  },
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
