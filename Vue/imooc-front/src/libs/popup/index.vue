<template>
  <div>
      <teleport to="body">
         <transition name="fade">
          <div class="absolute w-screen h-screen bg-zinc-900/80 z-40 top-0 left-0" />
         </transition>
          <transition name="popup-down-up">
            <div v-bind="$attrs" class="absolute w-screen bg-white  z-70 bottom-0"></div>
          </transition>

      </teleport>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 0.3s;
}
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,.fade-1eave-to{
  opacity: 0;
}
.popup-down-up-enter-active,
.popup-down-up-leave-active{
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to{
    transform: translateY(100%);
}

</style>