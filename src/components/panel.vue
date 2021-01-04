<template>
    <el-aside 
    class='a-aside'
    width='300px'
    >
        <el-tabs stretch>
            <el-tab-pane label="属性">属性</el-tab-pane>
            <el-tab-pane label="节点">节点</el-tab-pane>
            <el-tab-pane label="交互">交互</el-tab-pane>
        </el-tabs>
    </el-aside>
</template>

<script>

export default {

}
</script>

<style lang='scss' scoped>
.a-aside{
    overflow: hidden;
    height: 100%;
    padding: 0 5px;
    border-left: 1px solid #ddd;
}
</style>