<template>
    <div>
        主页{{ foo }}
        <a-button type="primary" @click="toAbout">按钮</a-button>
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

<style scoped lang='scss'></style>