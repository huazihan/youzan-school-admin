<template>
  <a-layout has-sider class="layout">
    <a-layout-header class="header">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="">
        <span>有赞校园 - 商家后台管理系统</span>
      </div>

      <div>
        <a-popover class="popover">
          <template #content>
            <a-button class="popover-btn" type="link" @click="logout()">退出登录</a-button>
          </template>
          <div class="user-info">
            <a-avatar :size="48" :src="require('../assets/img/avatar/avatar_1.jpg')"/>
            <span class="username">Alan</span>
          </div>
        </a-popover>
      </div>
    </a-layout-header>

    <a-layout>
      <a-layout-sider class="sidebar">
        <SideBar class="menu"/>
      </a-layout-sider>

      <a-layout>
        <a-layout-content class="content">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>

  </a-layout>
</template>

<script>
import SideBar from "@/components/SideBar";
import RiderEnrollData from "@/model/RiderEnrollData";
import {notification} from "ant-design-vue";
import RiderData from "@/model/RiderData";

export default {
  name: 'HomeView',
  components: {
    SideBar
  },
  created() {
    this.checkRiderStatus()
    this.checkRiderEnroll()
  },
  methods: {
    checkRiderEnroll() {
      let length = RiderEnrollData.getData().length
      if (length > 0) {
        notification.info({
          message: "骑手入职申请",
          description: "您有" + length + "个待处理的入职申请，点击前往查看",
          onClick: () => {
            this.$router.push('/rider/rider-enroll')
          }
        })
      }
    },
    checkRiderStatus() {
      let count = RiderData.getData().filter(r => r.status === 1).length
      if (count <= 0) {
        notification.warning({
          message: "空闲骑手不足",
          description: "当前暂无待命中的骑手，系统将减少调度，请商家自行处理好出餐配餐。"
        })
      }
    },
    logout() {
      window.location.href = "./login.html"
    }
  }
}
</script>

<style scoped>
.header {
  height: 90px;
  line-height: 90px;
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.header .logo {
  color: #000;
  font-size: 16px;
  font-weight: bold;
}

.header .user-info .username {
  font-size: 16px;
  padding: 0 20px;
}

.header .logo img {
  width: 45px;
  height: 45px;
  margin-right: 20px;
}
.layout {
  background-color: #eee;
}
.sidebar {
  top: 92px;
  /*width: 200px;*/
  height: 100%;
  position: fixed;
  background-color: #fff;
}
.content {
  margin-left: 200px;
  margin-top: 90px;
  background-color: #f3f3f3;
}
/*.popover, .popover-btn {*/
/*  position: fixed;*/
/*}*/
</style>