<template>
  <mobile :listData = 'mock'  v-if="isMobileTerminal"/>
  <pc :listData = 'mock' v-else></pc>
</template>

<script setup>
import Mobile from "@/layout/components/mobile.vue";
import Pc from "@/layout/components/pc.vue";
import {isMobileTerminal} from "@/utils/flexible.js";
import {ref} from "vue";
/*
UWUX
平面
插画/漫画
摄影
游戏
动漫
工业设计
建筑设计
人文艺术
家居/家装
女装/搭配
男士/风尚
造型/美妆
手工/布艺
 */
const mock = ref([
    {name:'平面',id:'平面'},
    {name:'插画/漫画',id:'插画/漫画'},
    {name:'摄影',id:'摄影'},
    {name:'游戏',id:'游戏'},
    {name:'工业设计',id:'工业设计'},
    {name:'建筑设计',id:'建筑设计'},
    {name:'人文艺术',id:'人文艺术'},
    {name:'家居/家装',id:'家居/家装'},
    {name:'女装/搭配',id:'女装/搭配'},
    {name:'男士/风尚',id:'男士/风尚'},
    {name:'造型/美妆',id:'造型/美妆'},
])



</script>

<style scoped>

</style>