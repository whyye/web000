<template>
  <div>
    <h3>新建分类</h3>
    <el-form @submit.native.prevent="saveCategory" ref="form" :model="category" label-width="80px">
      <el-form-item label="上级分类">

      <el-select v-model="category.parent" placeholder="请选择">
        <el-option
          v-for="item in parent"
          :key="item._id"
          :label="item.name"
          :value="item._id">
        </el-option>
      </el-select>

      </el-form-item>
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
      },
      parent: [],
        

    };
  },
  methods: {
    async getCategoryParent(){
     const res = await this.$http.get("categories");
     this.parent = res.data;
    },
   saveCategory () {
        this.$http.post('categories',this.category).then(res=>{

          console.log(res);
          
          
          this.$message({
          message: '新增分类成功',
          type: 'success'
        });

        this.$router.push('/category/list')
          
        })
      }
  },
  created() {
    this.getCategoryParent()
  },
};
</script>