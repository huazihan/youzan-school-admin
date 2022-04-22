<template>
  <a-result
      status="success"
      title="店铺资料提交成功"
      sub-title="我们将在1-3个工作日内完成审核，请您耐心等待。如有疑问，请联系800-800-8964"
  >
    <template #extra>
      <a-button key="console" type="primary" onclick="history.back()">返回</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  name: "SubmitSuccess"
}
</script>

<style scoped>

</style>