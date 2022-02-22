<script setup>
import { reactive } from "@vue/reactivity";

const state = reactive({
  color: "#ccc",
});
</script>

<template>
  <div class="text">PersonChild</div>
</template>

<style lang="scss" scoped>
.text {
  color: v-bind("state.color");
}
</style>