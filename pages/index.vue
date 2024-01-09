<template>
    <div>
        主页{{ foo }}
        <a-button type="primary" @click="toAbout">按钮</a-button>
        <div class="font">
            LOVE fs  你好
        </div>
    </div>
</template>

<script setup lang='ts'>
import { } from 'vue';
import { useRouter } from 'vue-router'; 
useHead({
    title: '主页'
})

const router = useRouter()
const toAbout = () => {
    router.push('/about')
}

const foo = add()
// definePageMeta({
//   layout: 'default'
// })
</script>

<style scoped lang='scss'>
.font {
    font-family: '火山修竹';
    font-size: 50px;
    font-weight: 700;
}
</style>