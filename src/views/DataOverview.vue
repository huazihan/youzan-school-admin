<template>
  <div class="container">
    <div class="msg">{{ time }}好，今天干得不错</div>
    <div class="banner">
      <div class="chart-box">
        <div class="title">最近7天订单趋势</div>
        <OrderChart class="order-chart"/>
      </div>
      <div class="today-data-box">
        <div class="data-item">
          <a-statistic title="今日订单量" :value="todayOrder">
            <template #prefix>
              <bar-chart-outlined />
            </template>
          </a-statistic>
        </div>
        <div class="data-item">
          <a-statistic title="今日营业额" :value="todayTurnover.toFixed(2)">
            <template #prefix>
              ￥
            </template>
          </a-statistic>
        </div>
        <div class="data-item">
          <a-statistic title="今日浏览量 (PV)" :value="todayPV">
            <template #prefix>
              <stock-outlined />
            </template>
          </a-statistic>
        </div>
      </div>
    </div>
    <div class="msg"><team-outlined /> 骑手状态 ({{ riderData.length }}人)</div>
    <div class="rider-status-box">
      <div class="data-item">
        <a-statistic title="配送中" :value="riderData.filter(k => k.status === 2).length + '人'"/>
      </div>
      <div class="data-item">
        <a-statistic title="待命中" :value="riderData.filter(k => k.status === 1).length + '人'"/>
      </div>
      <div class="data-item">
        <a-statistic title="休息中" :value="riderData.filter(k => k.status === 0).length + '人'"/>
      </div>
    </div>
    <div class="msg"><pie-chart-outlined />用户画像分析</div>
    <div class="user-statistics-box">
      <div class="data-item">
        <a-statistic title="用户最爱下单时间段" value="晚间"/>
        <canvas id="user-order-time-chart"/>
      </div>
      <div class="data-item">
        <a-statistic title="平均消费水平" value="￥0-20元"/>
        <canvas id="consumption-level-chart"/>
      </div>
      <div class="data-item">
        <a-statistic title="点餐偏好" value="主食"/>
        <canvas id="order-preference-chart"/>
      </div>
    </div>
  </div>
</template>

<script>
import OrderChart from "@/components/OrderChart";
import Chart from "chart.js/auto";
import TodayData from "@/model/TodayData";
import RiderData from "@/model/RiderData";

import { BarChartOutlined,StockOutlined, TeamOutlined, PieChartOutlined } from "@ant-design/icons-vue";

export default {
  name: "DataOverview",
  components: {
    OrderChart, BarChartOutlined, StockOutlined, TeamOutlined, PieChartOutlined
  },
  data() {
    return {
      todayOrder: 0,
      todayTurnover: 0,
      todayPV: 0,
      time: '上午',
      riderData: []
    }
  },
  mounted() {
    this.initData();
    this.initChart();
    this.randData();

  },
  methods: {
    initData() {
      const data = TodayData.getData()
      this.$data.todayOrder = data.todayOrder
      this.todayTurnover = data.todayTurnover
      this.todayPV = data.todayPV

      const d = new Date()
      const hours = d.getHours()
      if (hours <= 12) {
        this.time = '上午'
      } else if (hours > 12 && hours <= 18) {
        this.time = '下午'
      } else {
        this.time = '晚上'
      }

      this.riderData = RiderData.getData()
    },
    randData() {
      let that = this;
      setInterval(() => {
        if (Math.random() * 2 > 1) {
          let randOrderNum = parseInt("" + (Math.random() * 5))
          that.todayOrder += randOrderNum;
          that.todayPV += randOrderNum
          that.todayTurnover += (randOrderNum * (Math.random() * 10 + 5));
          TodayData.setData(that.$data)
        }
      }, 6000)
      setInterval(() => {
        if (Math.random() * 2 > 1) {
          that.todayPV += parseInt("" + (Math.random() * 3))
          TodayData.setData(that.$data)
        }
      }, 4500)
    },
    initChart() {
      new Chart("user-order-time-chart", {
        type: "doughnut",
        data: {
          labels: ["上午", "中午", "下午", "晚间"],
          datasets: [{
            labels: "用户下单时间段",
            data: [5, 35, 5, 45],
            backgroundColor: [
              'rgba(255, 99, 132, .4)',
              'rgba(54, 162, 235, .4)',
              'rgba(255, 206, 86, .4)',
              'rgba(75, 192, 192, .4)',
            ]
          }],
        },
      });
      new Chart("consumption-level-chart", {
        type: "pie",
        data: {
          labels: ["0-20", "30-50", "100+"],
          datasets: [{
            data: [60, 18, 22],
            backgroundColor: [
              'rgba(255, 99, 132, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(75, 192, 192, 0.4)',
            ]
          }],
        },
      });
      new Chart("order-preference-chart", {
        type: "pie",
        data: {
          labels: ["主食", "小吃", "其他"],
          datasets: [{
            data: [70, 20, 10],
            backgroundColor: [
              'rgba(255, 99, 132, 0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(75, 192, 192, 0.4)',
            ]
          }],
        },
      });
    },

  }
}
</script>

<style scoped>
.container {
  padding-bottom: 100px;
}

.banner {
  display: flex;
  justify-content: space-between;
  height: 400px;
}

.chart-box {
  width: 70%;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}

.order-chart {
  margin-bottom: 10px;
}

.today-data-box {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.today-data-box .data-item {
  height: 30%;
}

.data-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}

.user-statistics-box, .rider-status-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.user-statistics-box .data-item {
  width: calc(31.5% - 10px);
  /*height: 150px;*/
}

.user-statistics-box .data-item canvas {
  margin-top: 20px;
  width: 100%;
  height: 100%;
}

.rider-status-box .data-item {
  width: calc(31.5% - 10px);
  height: 130px;
}
</style>