<script setup lang="ts">
import chartView from './components/chartView.vue';
import getUsersList from "@/API/APIHelpers/getUsersList.ts";
import type IRequestParams from "@/models/IRequestParams.ts";
import formatRequestParams from "@/API/utils/formatRequestParams.ts"

const xAxis = [1, 2, 3, 4, 5];
const yAxis = [1, 2, 3, 4, 5];

const rp: IRequestParams = {
  uid:"123"
}

Object.entries(rp).forEach(([key, value]) => {
  console.log(key, value);
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
