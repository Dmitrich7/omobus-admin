<script setup lang="ts">
  import type {IChartViewProps} from "@/propsModels/IChartViewProps.ts";

  const {chartTitle, XAxis, YAxis} = defineProps<IChartViewProps>()

</script>

<template>
  <div class="chartContainer">
    <svg
      class="chartSvg"
    >

      <line x1="0" y1="0" x2="100%" y2="100" style="stroke:red;stroke-width:2"></line>
    </svg>
  </div>
</template>

<style scoped>
.chartContainer{
}
.chartSvg{
  width: 100%;
  height: 100%;
}
</style>