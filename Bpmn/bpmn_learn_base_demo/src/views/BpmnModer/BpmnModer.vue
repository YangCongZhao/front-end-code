<script setup>
import { storeToRefs } from 'pinia'
import { useBpmnStore } from '@/store/useBpmnStore'
import Bpmn from '@/components/customModeler/index.js'
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'
import { onMounted, ref } from 'vue'
import { getBpmnData } from '@/API/bpmn'
// import { setEncoded } from '@/utils'
import { addBpmnListener } from './addBpmnListener'
import custom from '../../components/customModeler/custom'
const bpmnStore = useBpmnStore()
const BpmnCanvas = ref(null)
// const SvgRef = ref(null)
const { modelerJson, bpmnModeler } = storeToRefs(bpmnStore)
const { setModelerJson, setBpmnModeler } = bpmnStore
// const saveBpmnXml = () => {
//   bpmnModeler.value.saveXML({ format: true }, (err, xml) => {
//     // console.log(xml)
//   })
// }
// const saveSvg = () => {
//   bpmnModeler.value.saveSVG((err, svg) => {
//     setEncoded(SvgRef.value, 'diagram.svg', svg)
//   })
// }
const createNewDiagram = () => {
  return bpmnModeler.value.importXML(modelerJson.value.model)
}
const initBpmn = async () => {
  //创建bpmn实例，存放到公共仓库中
  let modeler = new Bpmn({
    container: BpmnCanvas.value,
    //添加控制板
    propertiesPanel: {
      parent: BpmnCanvas.value
    },
    additionalModules: [
      // 右边的属性栏
      // propertiesProviderModule,
      // propertiesPanelModule
      // custom
    ],
    moddleExtensions: {
      camunda: camundaModdleDescriptor
    }
  })
  setBpmnModeler(modeler)
  let err = await createNewDiagram()
  bpmnModeler.value.get('canvas').zoom('fit-viewport')
  //添加事件
  addBpmnListener()
  console.log(err)
}
onMounted(async () => {
  //请求bpmn基础数据 xml之类的
  let result = await getBpmnData('123')
  //存放到pinia中
  setModelerJson(result)
  //初始化bpmn
  await initBpmn()
})
</script>
<template>
  <div id="BpmnCanvas" ref="BpmnCanvas" />
  <!--  <a ref="SvgRef" href="javascript:" />-->
</template>
<style lang="scss" scoped>
#BpmnCanvas {
  position: relative;
  width: 100%;
  height: calc(100vh);
  overflow: hidden;
  z-index: 0;
  :deep(.bpp-properties-panel) {
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    z-index: 1;
  }
  /* app.css */
  /* app.css */
  :deep(.icon-custom) {
    /* 定义一个公共的类名 */
    border-radius: 50%;
    background-size: 65%;
    background-repeat: no-repeat;
    background-position: center;
  }

  :deep(.icon-custom.lindaidai-task) {
    /* 加上背景图 */
    background-image: url('https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/rules.png');
  }
}
</style>
