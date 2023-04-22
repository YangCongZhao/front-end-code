<template>
  <div class="navigate bg-white sticky top-0 left-0 z-10" >
      <ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden" ref="ulTarget">
          <li ref="sliderTarget" :style="sliderStyle" class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200 "></li>
          <li class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white">
              <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
          </li>
          <li class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-1" :ref="setItemRef"  :class="{'text-zinc-100':currentCategoryIndex===index}"  v-for="(item,index) in listData" @click="clickItem(item,index)">{{item.name}}</li>
      </ul>
  </div>
    <m-popup />
</template>

<script setup>
import {onBeforeUpdate, reactive, ref} from "vue";
import {useScroll} from "@vueuse/core";

 defineProps({
    'listData':{
        type:Array,
        default:[],
        required:true
    }
})
 let  sliderStyle = reactive({
     transform:'translateX(0px)',
     width:"60px",

 })
const currentCategoryIndex = ref(0)
const ItemRefList = ref([])
const setItemRef = (el)=>{
    ItemRefList.value.push(el)
}
onBeforeUpdate(()=>{
    ItemRefList.value = []
})
const ulTarget = ref(null)
const {x:ulScrollLeft} = useScroll(ulTarget)

const clickItem = (item,index)=>{
     currentCategoryIndex.value = index
  const rect = ItemRefList.value[index].getBoundingClientRect()
    sliderStyle.transform = `translateX(${ulScrollLeft.value + rect.left}px)`
    sliderStyle.width = `${rect.width}px`


}
</script>

<style scoped>

</style>