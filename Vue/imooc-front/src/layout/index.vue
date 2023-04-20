<template>
  <mobile  v-if="isMobileTerminal"/>
  <pc v-else></pc>
</template>

<script setup>
import Mobile from "@/layout/components/mobile.vue";
import Pc from "@/layout/components/pc.vue";
import {isMobileTerminal} from "@/utils/flexible.js";



</script>

<style scoped>

</style>