<template>
  <div class="container">
    <div class="msg">订单列表</div>
    <a-table :columns="columns" bordered :scroll="{ x: 1500 }" :data-source="orderData">
      <template #bodyCell="{ column, text, index }">
        <template v-if="column.key === 'status'">
          <span v-if="text === 0">待接单</span>
          <span v-if="text === 1">已接单</span>
          <span v-if="text === 2">配送中</span>
          <span v-if="text === 3">已完成</span>
        </template>

        <template v-if="column.key === 'action'">
          <a-button type="link" @click="showDetailList[index] = !showDetailList[index]">查看详情</a-button>
          <a-modal v-model:visible="showDetailList[index]" title="订单详情"
                   @ok="showDetailList[index] = !showDetailList[index]">
            <p>订单ID: {{ text.orderID }}</p>
            <p>商品名称: {{ text.productName }}</p>
            <p>数量: {{ text.count }}份</p>
            <p>单价: {{ parseFloat(text.price).toFixed(2) }}</p>
            <p>总价: {{ parseFloat(text.amount).toFixed(2) }}</p>
            <p>
              状态:
              <span v-if="text.status === 0">待接单</span>
              <span v-if="text.status === 1">已接单</span>
              <span v-if="text.status === 2">配送中</span>
              <span v-if="text.status === 3">已完成</span>
            </p>
            <p>支付方式: {{ text.payOperation }}</p>
            <p>用户联系方式: {{ text.userPhone }}</p>
          </a-modal>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
import OrderData from "@/model/OrderData";

export default {
  name: "OrderView",
  data() {
    return {
      showDetailList: [],
      columns: [
        {
          title: '订单号',
          dataIndex: 'orderID',
          key: 'orderId',
          width: 150,
          sorter: {
            compare: (a, b) => a.orderID - b.orderID
          }
        },
        {
          title: '商品名称',
          dataIndex: 'productName',
          key: 'productName',
          width: 150
        },
        {
          title: '数量（份）',
          dataIndex: 'count',
          key: 'count',
          width: 100,
          sorter: {
            compare: (a, b) => a.count - b.count
          }
        },
        {
          title: '单价',
          dataIndex: 'price',
          key: 'price',
          width: 120,
          sorter: {
            compare: (a, b) => a.price - b.price
          }
        },
        {
          title: '总价',
          dataIndex: 'amount',
          key: 'amount',
          width: 150,
          sorter: {
            compare: (a, b) => a.amount - b.amount
          }
        },
        {
          title: '支付方式',
          dataIndex: 'payOperation',
          key: 'payOperation',
          width: 100
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          width: 100,
          sorter: {
            compare: (a, b) => a.status - b.status
          }
        },
        {
          title: '操作',
          width: 100,
          fixed: 'right',
          key: 'action'
        }
      ],
      orderData: [],
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.orderData = OrderData.getData()
    }
  }
}
</script>

<style scoped>

</style>