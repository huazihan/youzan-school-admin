<template>
  <div class="container">
    <div class="msg">店铺资料</div>
    <a-form :model="formData" class="form" layout="horizontal" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="店铺名称" name="storeName">
        <a-input v-model:value="formData.storeName" placeholder="请输入店铺名称"/>
      </a-form-item>

      <a-form-item label="店铺简介" name="storeDesc">
        <a-input v-model:value="formData.storeDesc" placeholder="请输入店铺简介"/>
      </a-form-item>

      <a-form-item label="店铺地址" name="storeAddress">
        <a-input v-model:value="formData.storeAddress" placeholder="请输入店铺地址"/>
      </a-form-item>

      <a-form-item label="主要业务" name="storeBusiness">
        <a-input v-model:value="formData.storeBusiness" placeholder="请输入业务"/>
      </a-form-item>

      <a-form-item label="联系电话" name="storeTell">
        <a-input v-model:value="formData.storeTell" placeholder="请输入联系电话"/>
      </a-form-item>

      <a-form-item name="storeLogo" label="LOGO">
        <a-upload :max-count="1"  accept=".jpg,.png,.jpeg,.gif" name="logo">
          <a-button>
            <template #icon>
              <UploadOutlined/>
            </template>
            上传图片
          </a-button>
        </a-upload>
      </a-form-item>

      <a-form-item name="storeLogo" label="营业执照">
        <a-upload :max-count="3" accept=".jpg,.png,.jpeg,.gif" name="logo" list-type="picture-card">
          <a-button type="link">
            <template #icon>
              <UploadOutlined/>
            </template>
          </a-button>
        </a-upload>
      </a-form-item>

      <a-form-item name="storeAcceptImg" label="经营许可">
        <a-upload :max-count="3" accept=".jpg,.png,.jpeg,.gif" name="logo" list-type="picture-card">
          <a-button type="link">
            <template #icon>
              <UploadOutlined/>
            </template>
          </a-button>
        </a-upload>
      </a-form-item>

      <a-form-item label="营业时间" name="storeOpenTime">
        <a-time-range-picker v-model:value="formData.storeOpenTime" format="HH:mm"></a-time-range-picker>
      </a-form-item>

      <a-form-item>
        <a-button class="submit-btn" type="primary" @click="submit()" html-type="submit">
          提交资料
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import {UploadOutlined} from "@ant-design/icons-vue";

export default {
  name: "StoreProfileView",
  components: {
    UploadOutlined
  },
  data() {
    return {
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
      formData: {
        storeName: "蟹堡王",
        storeDesc: "比奇堡最著名的快餐店",
        storeAddress: '比奇堡124号',
        storeBusiness: '主要贩卖蟹黄堡（汉堡，一般由海绵宝宝任厨）和一些小食、饮料。',
        storeTell: '01-989-0604',
        storeLogo: null,
        storeOpenTime: [],
      }
    }
  },
  methods: {
    submit() {
      this.$router.push('/success')
      console.log(this.formData)
    }
  },
  mounted() {
    this.formData.storeOpenTime[0] = dayjs('09:00', 'HH:mm')
    this.formData.storeOpenTime[1] = dayjs('23:00', 'HH:mm')
  }
}
</script>

<style scoped>
.submit-btn {
  margin-left: 95px;
  width: 200px;
  height: 45px;
  margin-top: 10px;
}
</style>