<template>
   <el-header 
    class="a-header" 
    height='auto'
    >
       <div>Puppet</div>

       <div class="a-buttons">
           <el-button type="text" icon='el-icon-view'>预览</el-button>
           <el-button type="text" icon='el-icon-folder'>保存</el-button>
           <el-button type="text" icon='el-icon-download'>导入</el-button>
           <el-button type="text" icon='el-icon-upload2'>导出</el-button>
           <el-button type="text" icon='el-icon-refresh'>重置</el-button>
       </div>
       
    </el-header>
</template>

<script>

export default {

}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/var.scss';

.a-header{
    display: flex;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;
    color: #fefefe;
    background-color: $--base-coolor;
    box-shadow: 0 2px 2px rgba(0,0,0,.05), 0 1px 0 rgba(0,0,0,.05);
}
.a-buttons .el-button--text{
    padding: 12px 10px;
    color: $--button-text-color;
    border-radius: 0;

    &:hover,
    &:active{
        background-color: $--button-text-hover-color;
    }
}

</style>