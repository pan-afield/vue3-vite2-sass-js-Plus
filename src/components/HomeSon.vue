<script setup>
import { ref } from "@vue/reactivity";
import groundson from "@/components/homeGroundson.vue";
import { inject } from "@vue/runtime-core";

//父子传值
// const props = defineProps({
//   money: Number,
// });
// const emit = defineEmits(["updateSonMoney"]);
// const reduceMoney = () => {
//   emit("updateSonMoney", 200);
//   console.log(emit);
// };
//ref获取DOM
const refDom = ref(null);
// console.log(refDom);

const a = 1;
const b = ref(2);

defineExpose({
  a,
  b,
});
//祖孙传值
const money = inject('money')
const reduceMoney = inject('sonChangeMoney')
</script>

<template>
  <div ref="refDom">HomeSon</div>
  <div>{{ money }}</div>
  <van-button type="warning" @click="reduceMoney(200)">警告按钮</van-button>
  <hr />
  <groundson />
</template>

<style lang="scss" scoped>
</style>