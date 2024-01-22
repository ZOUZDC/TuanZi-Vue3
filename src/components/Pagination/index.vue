<template>
<div class="tz-el-pagination">
    <el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 30, 50]"
        :pager-count="5"
        background
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
</div>
</template>
<script  setup>
    import { ref } from 'vue'

    const currentPage = ref(1)
    const pageSize = ref(15)

    const handleSizeChange = (val) => {
    console.log(`${val} items per page`)
}
    const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`)
}
</script>

<style scoped>
 .tz-el-pagination{
   display: flex;
   flex-direction: row-reverse;
   margin-top: 10px;
 }

</style>
