<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
