<template>
  <a-menu mode="inline" class="menu" :open-keys="openKeys" :selectedKeys="[$route.path]">
    <a-menu-item key="/data-overview">
      <template #icon>
        <pie-chart-outlined/>
      </template>
      <router-link to="/data-overview">数据概览</router-link>
    </a-menu-item>
    <a-sub-menu key="/rider" title="骑手管理">
      <template #icon>
        <car-outlined></car-outlined>
      </template>
      <a-menu-item key="/rider/rider-list">
        <template #icon>
          <TeamOutlined/>
        </template>
        <router-link to="/rider/rider-list">我的骑手</router-link>
      </a-menu-item>
      <a-menu-item key="/rider/rider-enroll">
        <template #icon>
          <user-add-outlined />
        </template>
        <router-link to="/rider/rider-enroll">入职申请</router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="/store" title="店铺管理">
      <template #icon>
        <shop-outlined/>
      </template>
      <a-menu-item key="/store/store-profile">
        <template #icon>
          <profile-outlined/>
        </template>
        <router-link to="/store/store-profile">店铺资料</router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="/product" title="商品管理">
      <template #icon>
        <appstore-outlined />
      </template>
      <a-menu-item key="/product/product-list">
        <template #icon>
          <ordered-list-outlined />
        </template>
        <router-link to="/product/product-list">商品列表</router-link>
      </a-menu-item>
      <a-menu-item key="/product/product-add">
        <template #icon>
          <file-add-outlined />
        </template>
        <router-link to="/product/product-add">添加商品</router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="/order" title="订单管理">
      <template #icon>
        <file-done-outlined />
      </template>
      <a-menu-item key="/order/order-list">
        <template #icon>
          <ordered-list-outlined />
        </template>
        <router-link to="/order/order-list">订单列表</router-link>
      </a-menu-item>
    </a-sub-menu>
<!--    <a-sub-menu key="sub5" title="评论管理">-->
<!--      <template #icon>-->
<!--        <comment-outlined />-->
<!--      </template>-->
<!--      <a-menu-item key="sub5-1">-->
<!--        <template #icon>-->
<!--          <ordered-list-outlined />-->
<!--        </template>-->
<!--        评论列表-->
<!--      </a-menu-item>-->
<!--    </a-sub-menu>-->
  </a-menu>
</template>

<script>
import {
  PieChartOutlined, ShopOutlined, ProfileOutlined,
  AppstoreOutlined, OrderedListOutlined, FileDoneOutlined,
  CarOutlined, TeamOutlined, UserAddOutlined,
    FileAddOutlined
} from '@ant-design/icons-vue'

export default {
  name: "SideBar",
  components: {
    PieChartOutlined,
    ShopOutlined,
    ProfileOutlined,
    AppstoreOutlined,
    OrderedListOutlined,
    FileDoneOutlined,
    FileAddOutlined,
    // CommentOutlined,
    CarOutlined,
    TeamOutlined,
    UserAddOutlined
  },
  data() {
    return {
      openKeys: []
    }
  },
  mounted() {
    this.getOpenKeys()
  },
  methods: {
    getOpenKeys() {
      const path = this.$route.path
      if (path.indexOf('-') !== -1) {
        this.openKeys[0] = path.substring(path.lastIndexOf('/'), path.indexOf('-'))
      }
    }
  }
}
</script>

<style scoped>
.menu {
}
</style>