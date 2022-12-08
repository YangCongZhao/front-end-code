<template>
  <nav class="navbar navbar-dark bg-primary mb-4">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24">
      </a>
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-light">
            登录
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-light">
            注册
          </a>
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-light">
            你好 {{user.name}}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
export interface UserProps{
  id?:number,
  name?:string,
  isLogin:boolean
}
export default defineComponent({
  name:'GlobalHeader',
  props:{
    user:{
      type:Object as PropType<UserProps>,
      required:true
    }
  }
})

</script>

<style lang='scss' scoped>

</style>
