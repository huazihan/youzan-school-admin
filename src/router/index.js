import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataOverview from "@/views/DataOverview";
import RiderView from "@/views/rider/RiderView";
import StoreProfileView from "@/views/store/StoreProfileView";
import RiderEnrollView from "@/views/rider/RiderEnrollView";
import SubmitSuccess from "@/views/SubmitSuccess";
import ProductView from "@/views/product/ProductView";
import AddProductView from "@/views/product/AddProductView";
import OrderView from "@/views/order/OrderView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: 'data-overview',
    children: [
      {
        path: 'data-overview',
        name: 'DataOverview',
        component: DataOverview,
      },

      {
        path: 'rider/rider-list',
        name: 'RiderList',
        component: RiderView
      },
      {
        path: 'rider/rider-enroll',
        name: 'RiderEnroll',
        component: RiderEnrollView
      },

      {
        path: 'store/store-profile',
        name: 'Store',
        component: StoreProfileView,
      },

      {
        path: 'product/product-list',
        name: 'ProductList',
        component: ProductView
      },
      {
        path: 'product/product-add',
        name: 'AddProduct',
        component: AddProductView
      },

      {
        path: 'order/order-list',
        name: 'OrderList',
        component: OrderView
      }
    ]
  },
  {
    path: '/success',
    name: 'Success',
    component: SubmitSuccess
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
