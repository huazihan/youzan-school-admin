<template>
  <div class="container">
    <div class="msg">入职申请</div>
    <a-table :columns="columns" :data-source="enrollData" bordered>
      <template #bodyCell="{ column, text }">
        <template v-if="column.key === 'action'">

          <a-popconfirm
              title="请确认是否同意入职"
              ok-text="是的"
              cancel-text="算了吧"
              @confirm="enroll(text.key)"
          >
            <a-button type="primary">接受</a-button>
          </a-popconfirm>

          <a-divider type="vertical"></a-divider>

          <a-button danger @click="showModel = !showModel">拒绝</a-button>
          <a-modal v-model:visible="showModel" title="请回复拒绝理由" @ok="reject(text.key)">
            <a-textarea placeholder="请这这里输入你的拒绝理由" :auto-size="{ minRows: 3, maxRows: 5 }"/>
          </a-modal>

        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
import RiderEnrollData from "@/model/RiderEnrollData";
import {message} from "ant-design-vue";
import RiderData from "@/model/RiderData";

export default {
  name: "RiderEnrollView",
  data() {
    return {
      showModel: false,
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '身份证号',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: '手机号',
          dataIndex: 'phone',
          key: 'phone'
        },
        {
          title: '申请时间',
          dataIndex: 'applicantTime',
          key: 'applicantTime',
          sorter: {
              compare: (a, b) => new Date(a.applicantTime).getTime() - new Date(b.applicantTime).getTime()
          }
        },
        {
          title: '操作',
          key: 'action'
        }
      ],
      enrollData: []
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      this.enrollData = RiderEnrollData.getData()
    },
    enroll(key) {
      RiderData.enroll(this.enrollData.find(k => k.key === key))
      this.enrollData = this.enrollData.filter(k => k.key !== key)
      RiderEnrollData.setData(this.enrollData)
      message.success('已通过该骑手的入职申请')
    },
    reject(key) {
      this.enrollData = this.enrollData.filter(k => k.key !== key)
      RiderEnrollData.setData(this.enrollData)
      message.success('已拒绝该骑手的入职申请')
    }
  }
}
</script>

<style scoped>

</style>