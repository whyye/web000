<template>
 <div>
   <h3>分类列表</h3>
    <el-table
      :data="categoryList"
    style="width: 90%"
  >
    <el-table-column label="ID" prop="_id"></el-table-column>
    <el-table-column label="上级分类" prop="parent.name"></el-table-column>
    <el-table-column label="分类名称" prop="name"></el-table-column>
    <el-table-column align="right">
     
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.row)">Edit</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
 </div>
</template>

<script>
export default {
  data() {
    return {
      categoryList: [],
      search: ""
    };
  },
  methods: {
    // 获取文章列表
   async getCategory(){
     const res = await this.$http.get("categories");
     this.categoryList = res.data;
    },

   async handleEdit(row){
     await  this.$router.push(`/category/${row._id}/edit`)
    },

   async handleDelete(row){
      const res= await this.$http.delete(`categories/${row._id}`)
         window.console.log(res);
          this.$message({
            message: "删除成功",
            type: "success"
          });
         this.getCategory();
   }
   
  },
  created() {
    this.getCategory();
  }
};
</script>


<style >
.el-table {
  margin: 20px auto;
}
</style>