<template>
  <div class="category">
      <ul>
          <li v-for="item in category" :key="item.id">{{item.name}}</li>
      </ul>
  </div>
</template>

<script setup>
defineProps({
    category:{
        type:Array,
        required:true,
        default:[]
    }
})
</script>

<style scoped>

</style>