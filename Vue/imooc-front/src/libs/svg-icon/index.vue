<template>
<svg aria-hidden="true">
    <use :xlink:href = 'symbolId' :class="fillClass" :fill = 'color'></use>
</svg>
</template>

<script setup>
  import {computed} from "vue";

  const props = defineProps({
      //显示的svg
      name:{
          type:String,
          required:true
      },
      //svg的颜色
      color:{
          type:String
      },
      //tailwind置顶svg的类名
      fillClass:{
          type:String
      }
  })
  //真是显示的svg图标
  const symbolId = computed(()=>{
      return `#icon-${props.name}`
  })
</script>

<style scoped>

</style>