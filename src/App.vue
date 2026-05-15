<script setup lang="ts">
import chartView from './components/chartView.vue';
import getUsersList from "@/API/APIHelpers/getUsersList.ts";
import type IRequestParams from "@/models/IRequestParams.ts";
import formatRequestParams from "@/API/utils/formatRequestParams.ts"
import getUserStatistics from "@/API/API/getUserStatistics.ts";

const xAxis = [1, 2, 3, 4, 5];
const yAxis = [1, 2, 3, 4, 5];

getUserStatistics("m3")
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
