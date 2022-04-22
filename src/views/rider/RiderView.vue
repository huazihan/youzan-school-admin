<template>
  <div class="container">
    <div class="msg">我的骑手</div>
    <a-table class="table" :columns="columns" :data-source="riderData" bordered>
      <template #emptyText>
        没有骑手怎么送餐 :(
      </template>
      <template #bodyCell="{ column, text }">
        <template v-if="column.key === 'status'">
          <span>
            <a-tag color="red" v-if="text === 0">休息中</a-tag>
            <a-tag color="blue" v-if="text === 1">待命中</a-tag>
            <a-tag color="green" v-if="text === 2">配送中</a-tag>
          </span>
        </template>

        <template v-if="column.key === 'action'">
          <a-button @click="reminder()" type="link" v-if="text.status === 2">催单</a-button>
          <template v-else>
            <a-tooltip>
              <template #title>该骑手未在配送中</template>
              <a-button type="link" disabled>催单</a-button>
            </a-tooltip>
          </template>

          <a-divider type="vertical"/>
          <a-popconfirm
              :title="text.status === 2 ? '请确认是否解雇？该骑手正在配送中，将会在当前订单完成后发送解雇通知' : '请确认是否解雇？解雇后将向骑手发送解雇通知。'"
              @confirm="removeRider(text.key)"
              ok-text="已经决定好了"
              cancel-text="我再想想"
          >
            <a-button type="link" danger>解雇</a-button>
          </a-popconfirm>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
import {message} from 'ant-design-vue';
import RiderData from "@/model/RiderData";

export default {
  name: "RiderView",
  data() {
    return {
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '手机号',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: '今日完成单数',
          dataIndex: 'todayOrderNum',
          key: 'todayOrderNum',
          sorter: {
            compare: (a, b) => a.todayOrderNum - b.todayOrderNum
          }
        },
        {
          title: '已完成总单数',
          dataIndex: 'orderNum',
          key: 'orderNum',
          sorter: {
            compare: (a, b) => a.orderNum - b.orderNum,
            multiple: 1
          }
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          sorter: {
            compare: (a, b) => a.status - b.status,
            multiple: 1
          }
        },
        {
          title: '入职日期',
          dataIndex: 'enrollDate',
          sorter: {
            compare: (a, b) => new Date(a.enrollDate).getTime() - new Date(b.enrollDate).getTime()
          }
        },
        {
          title: '操作',
          key: 'action'
        }
      ],
      riderData: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.riderData = RiderData.getData()
    },
    removeRider(index) {
      this.riderData = this.riderData.filter(k => k.key !== index)
      RiderData.setData(this.riderData)
      message.success("已发送解雇通知")
    },
    reminder() {
      message.info('已向骑手发送催单通知')
    }
  }
}
</script>

<style scoped>
</style>