<template>
  <el-table
    :data="tableData"
    style="width: 100%;background-color: #0f2b53"
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180"
    />
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
    />
    <el-table-column
      prop="address"
      label="地址"
    />
    <el-table-column
      prop="dd"
      label="电话"
    />
  </el-table>
</template>

<script>
export default {
  name: 'CenterBott',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金',
        dd: ''
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙',
        dd: ''
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙',
        dd: ''
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金',
        dd: ''
      }]
    }
  }
}
</script>
<style scoped>
/deep/ .el-table__body-wrapper {
  background-color: #f5f7fa; /* 表体背景色 */
}
.el-table th, .el-table tr {
  background-color: #2420B5 !important;
}

</style>
