<template>
  <div class="login">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 1 }"
      :wrapper-col="{ span: 4 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>
      <a-form-item
        label="验证码"
        name="code"
        :rules="[{ required: true, message: 'Please input your code!' }]"
      >
        <a-input v-model:value="formState.code" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 1, span: 4 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formState = reactive({
  username: '',
  password: '',
  code: ''
})
const onFinish = (value) => {
  console.log('onFinish', value)
}
const onFinishFailed = (value) => {
  console.log('onFinishFailed', value)
}
</script>

<style scoped></style>
