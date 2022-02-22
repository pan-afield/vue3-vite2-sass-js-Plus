<script setup>
import { onMounted, ref } from "vue";
import { useStore } from 'vuex'
defineProps({
    msg: String,
});
const count = ref(0);
const store = useStore()
console.log(store.state.num);
onMounted(() => {
    console.log('Person渲染完成');
})
</script>

<template>
    <div>Person</div>
    <div></div>
    <van-button type="primary">主要按钮</van-button>
    <router-view></router-view>
</template>

<style lang="scss" scoped>
</style>