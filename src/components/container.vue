<template>
    <el-main>
        <Drop :data='page' />
    </el-main>
</template>

<script>
import store from '@/lib/store';
import { Drop } from '@/lib/component'

export default {
    components: { Drop },

    computed: {
        page() {
            return store.states.page;
        }
    }
}
</script>
