<script setup lang="ts">
import chartView from './components/chartView.vue';
import getUsersList from "@/API/getUsersList.ts";

const xAxis = [1, 2, 3, 4, 5];
const yAxis = [1, 2, 3, 4, 5];

getUsersList().then((res) => {
  console.log(res);
})

</script>

<template>
  <div class="appWindow">
    <chartView :XAxis="xAxis" :YAxis="yAxis"></chartView>
  </div>
</template>

<style scoped>
.appWindow{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.chartContainer{
  border: 1px solid black;
  width: 80%;
  height: 80%;
}
</style>
