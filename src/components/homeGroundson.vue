<script setup>
import { inject } from "@vue/runtime-core";
defineProps({
  msg: String,
});
const money = inject("money");
const reduceMoney = inject("sonChangeMoney");
</script>

<template>
  <div>groundson</div>
  <p>{{ money }}</p>
  <van-button type="danger" @click="reduceMoney(100)">危险按钮</van-button>
</template>

<style lang="scss" scoped>
</style>