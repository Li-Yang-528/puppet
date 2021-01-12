<template>
    <el-aside class="a-aside">
        <el-tabs 
        class='a-tabs'
        type="border-card" 
        tab-position='left'
        >
            <el-tab-pane label="组件">
               <div class="a-drag">
                   <Drag
                   class="a-drag__item"
                   v-for="(item, index) in list"
                   :key='item.name + "-" +index'
                   :item='item'
                   >
                       {{item.title}}
                   </Drag>
               </div>
            </el-tab-pane>

            <el-tab-pane label="代码">代码</el-tab-pane>
        </el-tabs>
    </el-aside>
</template>

<script>
import getAllComponent from '@/lib/schema'
import {Drag} from '@/lib/component'
export default {
    components: {
        Drag
    },
    computed: {
        list() {
            return getAllComponent()
        }
    }
}
</script>

<style lang='scss'>
.a-aside{
    overflow: hidden;
    border-right: 1px solid #ddd;
}
.a-tabs{
    height: 100%;
    border: 0;
    box-sizing: border-box;
    & > .el-tabs__header{
        background-color: #3a3f51;
        border: 0 !important;

        & .el-tabs__item{
            padding: 0 10px;
            text-align: center;
        }
    }
}
.a-drag{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    &__item{
        background: #f6f7fb;
        border: 1px solid #ccc;
        padding: 4px 8px;
        display: flex;
        margin-bottom: 5px;
        align-items: center;
        flex: 0 0 40%;
        font-size: 12px;
        white-space: nowrap;
        cursor: move;
    }
}
</style>