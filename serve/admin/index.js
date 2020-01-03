module.exports=app=>{

  const express = require('express')
  const router = express.Router()

  const Category =require('../models/Category')


  // 测试服务器连接
  router.get('/',async (req,res)=>{
  res.send('返回的数据')
})


// 分类列表
router.get('/categories', async (req,res)=>{
  const category = await Category.find().populate('parent')
  res.send(category)
})

// 新增分类
router.post('/categories', async (req,res)=>{
  const category = await Category.create(req.body)
  res.send(category)
})

// 删除分类
router.delete('/categories/:id', async (req,res)=>{
  const category = await Category.findByIdAndDelete(req.params.id)
  res.send(category)
})

// 分类详情
router.get('/categories/:id', async (req,res)=>{
  const category = await Category.findById(req.params.id)
  res.send(category)
})
// 修改分类
router.put('/categories/:id', async (req,res)=>{
  const category = await Category.findByIdAndUpdate(req.params.id ,req.body)

  
  res.send(category)
})




  app.use('/admin/api',router)




}