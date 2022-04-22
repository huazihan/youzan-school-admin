<template>
  <canvas id="chart" width="100%" height="100%"></canvas>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "OrderChart",
  data() {
    return {
      orderChartData: {
        labels: ["25日", "26日", "27日", "28日", "29日", "39日", "31日"],
        datasets: [
          {
            label: '当天订单量',
            data: [120, 190, 213, 75, 39, 103, 120],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
          },
          {
            label: '当天订单量',
            data: [120, 190, 213, 75, 39, 103, 120],
            type: 'line',
            borderColor: [
              'rgba(255,99,132,1)',
            ],
          }
        ],
      }
    }
  },
  mounted() {
    let that = this;
    new Chart("chart", {
      type: "bar",
      data: that.orderChartData,
      options: {
        legend: {
          display: false
        },
        title: {
          display: true,
          position: 'top',
          text: "最近7天订单趋势",
        },

      }
    });
  }
}
</script>

<style scoped>

</style>