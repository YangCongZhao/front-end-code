// 判断当前是否为移动设备，判断依据屏幕宽度是否小于一个指定宽度（1280）
import { PC_DEVICE_WIDRTH } from "@/constants";
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
export const isMobileTerminal = computed(() => {
  const { width } = useWindowSize();
  return width.value > PC_DEVICE_WIDRTH;
});
