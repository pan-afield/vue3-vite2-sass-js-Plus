<script setup>
import { onMounted, provide, ref } from "vue";
import { useStore } from "vuex";
import Son from "@/components/HomeSon.vue";
defineProps({
  msg: String,
});
const count = ref(0);
const store = useStore();
let money = ref(1000);
const updateMoney = () => {
  money.value = 500;
};
const sonChangeMoney = (value) => {
  money.value = value;
};
let refSon = ref(null);
provide("money", money);
provide("sonChangeMoney",sonChangeMoney)
onMounted(() => {
  console.log(refSon.value);
});
</script>

<template>
  <div>Home</div>
  <div>{{ money }}</div>
  <van-button type="primary" @click="updateMoney">主要按钮</van-button>
  <hr />
  <!-- <Son ref="refSon" :money="money" @updateSonMoney="sonChangeMoney"></Son> -->
  <Son ref="refSon"></Son>
</template>

<style lang="scss" scoped>
</style>
