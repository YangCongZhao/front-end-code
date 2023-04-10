<template>
  <component :category="category" :is="dynamicalComponent"></component>
</template>

<script setup>
import {isMobileTerminal} from "@/utils/flexible.js";
import MobileNavigation from "@/views/main/components/navigation/mobile/MobileNavigation.vue";
import PcNavigation from "@/views/main/components/navigation/pc/PcNavigation.vue";
import {computed, ref} from "vue";
const dynamicalComponent = computed(()=>{
    return isMobileTerminal.value?PcNavigation:MobileNavigation
})
const category = ref([
    {id:Math.random(),name:'家具/建材',urlName:'jiancai'},
    {id:Math.random(),name:'插画',urlName:'chahua'},
    {id:Math.random(),name:'UI',urlName:'ui'}
])


</script>

<style scoped>

</style>