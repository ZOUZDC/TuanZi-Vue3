<script lang="ts" setup>
import { ref } from 'vue'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
]
for (let i = 0; i <15; i++) {
  tableData.push(tableData[0])
}
const currentPage4 = ref(1)
const pageSize4 = ref(15)
const small = ref(false)
const background = ref(false)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>
<template>
  <el-card class="box-card">
    <el-table :data="tableData" border stripe  style=":100%" >
      <el-table-column prop="date" label="Date1111111111" />
      <el-table-column prop="name" label="Name"  />
      <el-table-column prop="address" label="Address"  show-overflow-tooltip/>
      <el-table-column fixed="right" label="Operations" >
        <template #default>
          <el-button link type="primary" size="small" >Detail</el-button>
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination />
  </el-card>

</template>
<style scoped>
.el-pagination {
  padding-top: 10px;
}
.box-card{
  display: flex;
  flex-direction: column;
}
</style>


