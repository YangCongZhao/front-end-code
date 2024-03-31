<script>
import G6 from '@antv/g6';
import {initG6RRD} from "@/components/g6-runtimeRelationshipDiagram/lib";
export default {
  name: "g6-runtimeRelationshipDiagram",
  mounted() {
   const graph =  initG6RRD(G6,this.$refs.g6Ref)
        if (typeof window !== 'undefined')
      window.onresize = () => {
        if (!graph || graph.get('destroyed')) return;
        if (!this.$refs.g6Ref || !this.$refs.g6Ref.scrollWidth || !this.$refs.g6Ref.scrollHeight) return;
        graph.changeSize(this.$refs.g6Ref.scrollWidth, this.$refs.g6Ref.scrollHeight - 20);
      };

  }
}
</script>
<template>
  <div class="g6-rrd-wrapper" ref="g6Ref">
  </div>
</template>

<style lang="scss" scoped>
.g6-rrd-wrapper{
  position: relative;
  //width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
:deep(.g6-toolbar-ul){
    margin: 0;
    padding: 10px;
    width: 20%;
    position: absolute;
    top:0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 5px;
   li{
    list-style: none;
     font-size: 12px;
  }
  }
}
</style>
