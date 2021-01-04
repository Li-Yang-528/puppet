<template>
    <el-main>
        <drop
        v-for="(item, index) in list "
        :key='item.name + index'
        :item='item'
        >

        </drop>
    </el-main>
</template>

<script>
import store from '@/lib/store';
import { Drop } from '@/lib/component'

export default {
    components: { Drop },

    computed: {
        list() {
            return [store.states.page];
        }
    }
}
</script>
