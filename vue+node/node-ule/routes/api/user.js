var express = require('express');
var router = express.Router();
var mgdb = require('../../utils/mgdb')

//列表详情
router.get('/', function (req, res, next) {
  // console.log('home...-_-')
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

  let { _id,goods, _page, _limit, _sort,num, q } = req.query;//结构出请求携带的所有参数

  //整理搜索条件
  q = q ? {
    $or: [{ title: eval('/' + q + '/') }, { des: eval('/' + q + '/') }]
  }:{};


  if (_id) {
    //详情
    findDetail({_id,num,goods,req,res,next})
  } else {
    //列表
    mgdb({
      collectionName: 'user',
      success: ({ collection, client,ObjectID }) => {
        collection.updataOne({
            _id: ObjectID(_id)
          },  
          {
            goods,num
          }).toArray((err, result) => {
            if (err) {
              res.send({ err: 1, msg: 'home集合操作错误' })
            } else {
              res.send({ err: 0, data: result })
            }
            client.close()
          })
      },
      error: (err) => { console.log(err) },
    })
  }

});

//详情
router.get('/:id', function (req, res, next) {
  //详情
  // console.log(':id',req.params)
  findDetail({_id:req.params.id,req,res,next})
});

function findDetail({_id,goodsid,num,req,res,next}){
  mgdb({
    collectionName: 'user',
    success: ({ collection, client, ObjectID }) => {
      collection.updataOne({
        _id: ObjectID(_id)
      },  
      {
        goods,num
      }).toArray((err, result) => {
          if (err) {
            res.send({ err: 1, msg: 'user集合操作错误' })
          } else {
            if(result.length>0){
              res.send({ err: 0, data: result[0] })
            }else{
              res.send({ err: 1, msg: '未查询到' })
            }
          }
          client.close()
        })
    },
    error: (err) => { console.log(err) },
  })
}

module.exports = router;
