<template>
    <el-container 
    direction='vertical'
    >
        <a-header />

        <el-container>

            <!-- 左侧操作 -->
            <a-aside />

            <!-- 中间画布 -->
            <a-container />

            <!-- 右侧属性 -->
            <a-panel />

        </el-container>

    </el-container>
</template>

<script>

export default {
    components: {
        AHeader: () => import('./header'),
        AAside: () => import('./sidebar'),
        APanel: () => import('./panel'),
        AContainer: () => import('./container')
    }
}
</script>
