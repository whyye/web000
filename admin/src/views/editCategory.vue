<template>
    <div>
   <h3>编辑分类</h3>
    <el-form @submit.native.prevent="saveCategory" ref="form" :model="category" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="category.name"></el-input>
      </el-form-item>
   
      <el-form-item>
        <el-button type="primary" native-type="submit" >保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
  
  </template>
<script>

  export default {
    data() {
      return {
        category: {
        name: ""
      }
      }
    },
    methods: {
       // 获取文章列表
    getCategory() {
      this.$http.get("categories").then(res => {
        this.category = res.data;
      });
    },

    async  saveCategory() {
        let id = this.category._id
      await  this.$http.put(`categories/${id}`,this.category).then(res=>{

          console.log(res);
          
          
          this.$message({
          message: '修改成功',
          type: 'success'
        });

        this.getCategory();

        this.$router.push('/category/list')
          
        })
      }
    },

    created(){
      let id= this.$route.params.id
      this.$http.get(`categories/${id}`).then(res=>{
        console.log(res.data);
        this.category=res.data;
        
      })
    }
  }
</script>

