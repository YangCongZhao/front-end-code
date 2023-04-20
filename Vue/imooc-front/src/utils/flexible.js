/*
判断当前是否支持移动设备 1280
 */
import {computed} from "vue";
import {PC_DEVICE_WIDTH} from "@/constants/index.js";
import {useWindowSize} from "@vueuse/core";

export const isMobileTerminal = computed(()=>{
    const {width} = useWindowSize()
    return  width.value < PC_DEVICE_WIDTH

})

