<template>
<div class="container">
  <div class="msg">添加商品</div>
  <a-form ref="formRef" :model="productData" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="商品名称" name="productName" >
      <a-input v-model:value="productData.productName" placeholder="请输入商品名称"
               :rules="[{ required: true, message: '请输入商品名称' }]"
      />
    </a-form-item>
    <a-form-item label="商品介绍" name="productDesc">
      <a-textarea :rules="[{ required: true, message: '请输入商品介绍' }]" v-model:value="productData.productDesc" placeholder="请输入商品介绍"/>
    </a-form-item>
    <a-form-item label="商品价格" name="productPrice">
      <a-input style="width: 120px"  v-model:value="productData.productPrice" placeholder="请输入商品价格"
               :rules="[{ required: true, message: '请输入商品价格' }]"/>
    </a-form-item>
    <a-form-item label="商品图片" name="productImgList">
      <a-upload :max-count="10" accept=".jpg,.png,.jpeg,.gif" name="productImgList" list-type="picture-card">
        <a-button type="link">
          <template #icon>
            <UploadOutlined/>
          </template>
        </a-button>
      </a-upload>
    </a-form-item>
    <a-form-item label="所属分类" style="width: 250px;">
      <a-select v-model:value="productData.productCategory">
        <a-select-option value="主食">主食</a-select-option>
        <a-select-option value="面食">面食</a-select-option>
        <a-select-option value="饮品">饮品</a-select-option>
        <a-select-option value="小吃">小吃</a-select-option>
        <a-select-option value="其他">其他</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="上下架状态" style="width: 250px;">
      <a-select v-model:value="productData.productStatus">
        <a-select-option :value="1">上架</a-select-option>
        <a-select-option :value="0">下架</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" @click="submit()" html-type="submit" style="width: 200px; height: 45px;margin-left: 95px">添加商品</a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
import { message } from 'ant-design-vue';
import {UploadOutlined} from "@ant-design/icons-vue";
import ProductData from "@/model/ProductData";
import {ref} from "vue";

export default {
  name: "AddProductView",
  components: {
    UploadOutlined
  },
  data() {
    return {
      formRef: ref(),
      labelCol: {
        style: {
          width: '85px',
          textAlign: 'right',
          marginRight: '10px'
        }
      },
      wrapperCol: {
        span: 16,
      },
      productData: {
        productName: null,
        productDesc: null,
        productPrice: 0.00,
        productImgList: [
          require('../../assets/img/product/product1.jpg'),
          require('../../assets/img/product/product2.jpg')
        ],
        productSaleNum: 0,
        productCategory: '主食',
        productStatus: 1,
      }
    }
  },
  methods: {
    submit() {
      const product = {
        name: '',
        desc: '',
        price: '0.00',
        saleNum: 0,
        todaySaleNum: 0,
        category: '',
        status: 1,
        imgList: []
      }
      product.name = this.productData.productName
      product.desc = this.productData.productDesc
      product.price = this.productData.productPrice
      product.todaySaleNum = 0
      product.saleNum = 0
      product.category = this.productData.productCategory
      product.status = this.productData.productStatus
      product.imgList = this.productData.productImgList

      ProductData.pushProduct(product)

      message.success("添加商品成功")
      history.back();
    }
  }
}
</script>

<style scoped>

</style>