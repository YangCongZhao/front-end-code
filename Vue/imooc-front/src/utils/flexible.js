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

/*
动态置顶rem基准值  最大为40px
根据用户的屏幕宽度，进行一些计算，把计算出来的值赋值给html标签 作为fontsize大小
 */
export const useREM = ()=>{
    //定义最大的fon-tSize
    const MAX_FONT_SIZE = 40
    document.addEventListener('DOMContentLoaded',()=>{
        //拿到html标签
        const html = document.querySelector('html')
        //计算fontSize，根据 屏幕宽度/10
        let fontSize = window.innerWidth / 10
        fontSize = fontSize>MAX_FONT_SIZE? MAX_FONT_SIZE:fontSize
        html.style.fontSize = fontSize+'px'
    })
}


