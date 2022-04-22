<template>
  <div class="container">
    <div class="msg">商品列表</div>
    <a-table :columns="columns" :data-source="productList" bordered>
      <template #bodyCell="{ column, text, index }">
        <a-tag v-if="column.key === 'category'" color="red">{{ text }}</a-tag>

        <template v-if="column.key === 'status'">
          <a-tag color="red" v-if="text === 0">下架</a-tag>
          <a-tag color="green" v-if="text === 1">上架</a-tag>
        </template>

        <template v-if="column.key === 'action'">
          <a-popconfirm v-if="text.status === 1" title="是否要下架？" ok-text="是的" cancel-text="不" @confirm="offShelf(text.key)">
            <a-button danger>下架</a-button>
          </a-popconfirm>
          <a-popconfirm v-if="text.status === 0" title="是否要上架？" ok-text="是的" cancel-text="不" @confirm="onShelf(text.key)">
            <a-button type="primary">上架</a-button>
          </a-popconfirm>
          <a-divider type="vertical"></a-divider>
          <a-popconfirm title="请确认是否删除，建议优先使用上下架功能" ok-text="执意删除" cancel-text="算了" @confirm="deleteProduct(text.key)">
            <a-button danger>删除</a-button>
          </a-popconfirm>
          <a-divider type="vertical"></a-divider>
          <a-button type="link" @click="showDetailList[index] = !showDetailList[index]">查看详情</a-button>
          <a-modal v-model:visible="showDetailList[index]" title="商品详情" @ok="showDetailList[index] = !showDetailList[index]">
            <p>商品名称: {{ text.name }}</p>
            <p>商品介绍: {{ text.desc }}</p>
            <p>商品价格: {{ text.price }}</p>
            <p>今日销量: {{ text.todaySaleNum }}份</p>
            <p>总销量: {{ text.saleNum }}份</p>
            <p>所属分类: {{ text.category }}</p>
            <p>上架状态: {{ text.status === 1 ? '上架' : '下架' }}</p>
            <p>商品图片:
              <img style="width: 100px; height: 100px; object-fit: cover; margin-right: 10px" v-for="item in text.imgList" v-bind:key="item" :src="item" alt="">
            </p>
          </a-modal>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script>
import ProductData from "@/model/ProductData";

export default {
  name: "ProductView",
  data() {
    return {
      showDetailList: [],
      columns: [
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '价格',
          dataIndex: 'price',
          key: 'price',
          sorter: {
            compare: (a, b) => parseFloat(a.price) - parseFloat(b.price)
          }
        },
        {
          title: '今日销量',
          dataIndex: 'todaySaleNum',
          key: 'todaySaleNum',
          sorter: {
            compare: (a, b) => a.todaySaleNum - b.todaySaleNum
          }
        },
        {
          title: '总销量',
          dataIndex: 'saleNum',
          key: 'saleNum',
          sorter: {
            compare: (a, b) => a.saleNum - b.saleNum
          }
        },
        {
          title: '所属分类',
          dataIndex: 'category',
          key: 'category'
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          sorter: {
            compare: (a, b) => a.status - b.status
          }
        },
        {
          title: '操作',
          key: 'action'
        }
      ],
      productList: [],
    }
  },
  mounted() {
    this.productList = ProductData.getData()
  },
  methods: {
    offShelf(index) {
      for (let i = 0; i < this.productList.length; i++) {
        const item = this.productList[i]
        if (item.key === index) {
          this.productList[i].status = 0
          break
        }
      }
      ProductData.setData(this.productList)
    },
    onShelf(index) {
      for (let i = 0; i < this.productList.length; i++) {
        const item = this.productList[i]
        if (item.key === index) {
          this.productList[i].status = 1
          break
        }
      }
      ProductData.setData(this.productList)
    },
    deleteProduct(index) {
      for (let i = 0; i < this.productList.length; i++) {
        const item = this.productList[i]
        if (item.key === index) {
          this.productList.splice(i, 1)
          break
        }
      }
      ProductData.setData(this.productList)
    }
  }
}
</script>

<style scoped>

</style>