<template>
  <div id="app">
    <g6-runtime-relationship-diagram />
  </div>
</template>

<script>
// import G6 from '@antv/g6';

import G6RuntimeRelationshipDiagram from "@/components/g6-runtimeRelationshipDiagram/g6-runtimeRelationshipDiagram.vue";

export default {
  name:'app',
  components: {G6RuntimeRelationshipDiagram},
//   mounted() {
//
//     const processParallelEdgesOnAnchorPoint = (
//       edges,
//       offsetDiff = 15,
//       multiEdgeType = 'arrow-running',
//       singleEdgeType = undefined,
//       loopEdgeType = undefined
//   ) => {
//     const len = edges.length;
//     const cod = offsetDiff * 2;
//     const loopPosition = [
//       'top',
//       'top-right',
//       'right',
//       'bottom-right',
//       'bottom',
//       'bottom-left',
//       'left',
//       'top-left',
//     ];
//     const edgeMap = {};
//     const tags = [];
//     const reverses = {};
//     for (let i = 0; i < len; i++) {
//       const edge = edges[i];
//       const { source, target, sourceAnchor, targetAnchor } = edge;
//       const sourceTarget = `${source}|${sourceAnchor}-${target}|${targetAnchor}`;
//
//       if (tags[i]) continue;
//       if (!edgeMap[sourceTarget]) {
//         edgeMap[sourceTarget] = [];
//       }
//       tags[i] = true;
//       edgeMap[sourceTarget].push(edge);
//       for (let j = 0; j < len; j++) {
//         if (i === j) continue;
//         const sedge = edges[j];
//         const { source: src, target: dst, sourceAnchor: srcAnchor, targetAnchor: dstAnchor } = sedge;
//
//         // 两个节点之间共同的边
//         // 第一条的source = 第二条的target
//         // 第一条的target = 第二条的source
//         if (!tags[j]) {
//           if (source === dst && sourceAnchor === dstAnchor
//               && target === src && targetAnchor === srcAnchor) {
//             edgeMap[sourceTarget].push(sedge);
//             tags[j] = true;
//             reverses[`${src}|${srcAnchor}|${dst}|${dstAnchor}|${edgeMap[sourceTarget].length - 1}`] = true;
//           } else if (source === src && sourceAnchor === srcAnchor
//               && target === dst  && targetAnchor === dstAnchor) {
//             edgeMap[sourceTarget].push(sedge);
//             tags[j] = true;
//           }
//         }
//       }
//     }
//
//     for (const key in edgeMap) {
//       const arcEdges = edgeMap[key];
//       const { length } = arcEdges;
//       for (let k = 0; k < length; k++) {
//         const current = arcEdges[k];
//         if (current.source === current.target) {
//           if (loopEdgeType) current.type = loopEdgeType;
//           // 超过8条自环边，则需要重新处理
//           current.loopCfg = {
//             position: loopPosition[k % 8],
//             dist: Math.floor(k / 8) * 20 + 50,
//           };
//           continue;
//         }
//         if (length === 1 && singleEdgeType && (current.source !== current.target || current.sourceAnchor !== current.targetAnchor)) {
//           current.type = singleEdgeType;
//           continue;
//         }
//         current.type = multiEdgeType;
//         const sign =
//             (k % 2 === 0 ? 1 : -1) * (reverses[`${current.source}|${current.sourceAnchor}|${current.target}|${current.targetAnchor}|${k}`] ? -1 : 1);
//         if (length % 2 === 1) {
//           current.curveOffset = sign * Math.ceil(k / 2) * cod;
//         } else {
//           current.curveOffset = sign * (Math.floor(k / 2) * cod + offsetDiff);
//         }
//       }
//     }
//     return edges;
//   };
//
//     const data = {
//       nodes: [
//         { id: 'node1', x: 350, y: 100 },
//         { id: 'node2', x: 350, y: 250 },
//       ],
//       edges: [
//       ],
//       combos: [
//       ],
//     };
//     const container = document.getElementById('app');
//     const toolbar = new G6.ToolBar({
//       // container: tc,
//       className: 'g6-toolbar-ul',
//       getContent: () => {
//         return `
//       <ul>
//         <li code='add'>增加节点</li>
//         <li code='undo'>撤销</li>
//         <li code='redo'>回退</li>
//         <li code='group'>添加群组</li>
//         <li code='save'>保存</li>
//       </ul>
//     `;
//       },
//       handleClick: (code, graph) => {
//         if (code === 'add') {
//           graph.addItem('node', {
//             id: 'node4',
//             type:'rect-node',
//             label: '信息系统可观察',
//             x: 300,
//             y: 150,
//           });
//         } else if (code === 'undo') {
//           toolbar.undo();
//         } else if (code === 'redo') {
//           toolbar.redo();
//         } else if(code==='group') {
//           graph.addItem('combo', {
//             id: 'combo1',
//             label: 'combo1',
//             x: 300,
//             y: 150,
//           });
//         }else if(code==='save'){
//           console.log(graph.save());
//         }
//       },
//     });
// // custom a node with anchor-point shapes
//     G6.registerNode('rect-node', {
//       // draw anchor-point circles according to the anchorPoints in afterDraw
//       afterDraw(cfg, group) {
//         const bbox = group.getBBox();
//         //获取元素的锚点
//         const anchorPoints = this.getAnchorPoints(cfg)
//         //添加小圆点
//         anchorPoints.forEach((anchorPos, i) => {
//           group.addShape('circle', {
//             attrs: {
//               r: 5,
//               x: bbox.x + bbox.width * anchorPos[0],
//               y: bbox.y + bbox.height * anchorPos[1],
//               fill: '#fff',
//               stroke: '#5F95FF'
//             },
//             // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
//             name: `anchor-point`, // the name, for searching by group.find(ele => ele.get('name') === 'anchor-point')
//             anchorPointIdx: i, // flag the idx of the anchor-point circle
//             links: 0, // cache the number of edges connected to this shape
//             visible: false, // invisible by default, shows up when links > 1 or the node is in showAnchors state
//           })
//         })
//       },
//       getAnchorPoints(cfg) {
//         return cfg.anchorPoints || [[0, 0.5], [0.33, 0], [0.66, 0], [1, 0.5], [0.33, 1], [0.66, 1]];
//       },
//       // response the state changes and show/hide the link-point circles
//       setState(name, value, item) {
//         if (name === 'showAnchors') {
//           const anchorPoints = item.getContainer().findAll(ele => ele.get('name') === 'anchor-point');
//           anchorPoints.forEach(point => {
//             if (value || point.get('links') > 0) point.show()
//             else point.hide()
//           })
//         }
//       }
//     }, 'rect')
//     const { getLabelPosition, transform } = G6.Util;
//     G6.registerEdge(
//         "arrow-running",
//         {
//           afterDraw(cfg, group) {
//             // get the first shape in the group, it is the edge's path here=
//             const shape = group.get("children")[0];
//
//             const arrow = group.addShape("marker", {
//               attrs: {
//                 x: 16,
//                 y: 0,
//                 r: 8,
//                 lineWidth: 2,
//                 stroke: "#3370ff",
//                 fill: "#fff",
//                 symbol: (x, y, r) => {
//                   console.log(r);
//                   return [
//                     ["M", x - 6, y - 4],
//                     ["L", x - 2, y],
//                     ["L", x - 6, y + 4]
//                   ];
//                 }
//               }
//             });
//
//             // animation for the red circle
//             arrow.animate(
//                 (ratio) => {
//                   // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
//                   // get the position on the edge according to the ratio
//                   const tmpPoint = shape.getPoint(ratio);
//                   const pos = getLabelPosition(shape, ratio);
//                   let matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
//                   matrix = transform(matrix, [
//                     ["t", -tmpPoint.x, -tmpPoint.y],
//                     ["r", pos.angle],
//                     ["t", tmpPoint.x, tmpPoint.y]
//                   ]);
//
//                   // returns the modified configurations here, x and y here
//                   return {
//                     x: tmpPoint.x,
//                     y: tmpPoint.y,
//                     matrix
//                   };
//                 },
//                 {
//                   // repeat: true, // Whether executes the animation repeatly
//                   duration: 1000 // the duration for executing once
//                 }
//             );
//           }
//         },
//         "cubic" // extend the built-in edge 'cubic'
//     );
//
//     let sourceAnchorIdx, targetAnchorIdx;
//
//     const width = container.scrollWidth;
//     const height = (container.scrollHeight || 500) - 20;
//     const graph = new G6.Graph({
//       container: 'app',
//       width,
//       height,
//       groupByTypes: false,
//       modes: {
//         default: [
//           'drag-node',
//           // config the shouldBegin and shouldEnd to make sure the create-edge is began and ended at anchor-point circles
//           {
//             type: 'create-edge',
//             shouldBegin: e => {
//               // avoid beginning at other shapes on the node
//               if (e.target && e.target.get('name') !== 'anchor-point') return false;
//               sourceAnchorIdx = e.target.get('anchorPointIdx');
//               e.target.set('links', e.target.get('links') + 1); // cache the number of edge connected to this anchor-point circle
//               return true;
//             },
//             shouldEnd: e => {
//               // avoid ending at other shapes on the node
//               if (e.target && e.target.get('name') !== 'anchor-point') return false;
//               if (e.target) {
//                 targetAnchorIdx = e.target.get('anchorPointIdx');
//                 e.target.set('links', e.target.get('links') + 1);  // cache the number of edge connected to this anchor-point circle
//                 return true;
//               }
//               targetAnchorIdx = undefined;
//               return true;
//             },
//             // update the sourceAnchor
//             // getEdgeConfig: () => {
//             //   return {
//             //     sourceAnchor: sourceAnchorIdx
//             //   }
//             // }
//           },
//           'drag-canvas', 'drag-node', 'drag-combo', 'collapse-expand-combo', 'click-select'
//           ],
//       },
//       defaultCombo: {
//         type: 'rect',
//         size: [40, 10], // The minimum size of the Combo
//         padding: [30, 20, 10, 20],
//         style: {
//           lineWidth: 1,
//         },
//         labelCfg: {
//           refY: 10,
//           refX: 20,
//           position: 'top',
//         },
//       },
//       comboStateStyles: {
//         dragenter: {
//           lineWidth: 4,
//           stroke: '#FE9797',
//         },
//       },
//       plugins:[toolbar],
//       defaultNode: {
//         type: 'rect-node',
//         style: {
//           fill: '#eee',
//           stroke: '#ccc',
//         }
//       },
//       defaultEdge: {
//         defaultEdge: {
//           type: "arrow-running",
//           style: {
//             lineWidth: 5,
//             stroke: "#bae7ff"
//           }
//         }
//       },
//     });
//
//     graph.data(data);
//     graph.render();
//
//     graph.on('aftercreateedge', (e) => {
//       // update the sourceAnchor and targetAnchor for the newly added edge
//       graph.updateItem(e.edge, {
//         sourceAnchor: sourceAnchorIdx,
//         targetAnchor: targetAnchorIdx
//       })
//       // update the curveOffset for parallel edges
//       const edges = graph.save().edges;
//       processParallelEdgesOnAnchorPoint(edges);
//       graph.getEdges().forEach((edge, i) => {
//         graph.updateItem(edge, {
//           curveOffset: edges[i].curveOffset,
//           curvePosition: edges[i].curvePosition,
//         });
//       });
//     });
//
// // if create-edge is canceled before ending, update the 'links' on the anchor-point circles
//     graph.on('afterremoveitem', e => {
//       console.log('afterremoveitem',e);
//       if (e.item && e.item.source && e.item.target) {
//         const sourceNode = graph.findById(e.item.source);
//         const targetNode = graph.findById(e.item.target);
//         const { sourceAnchor, targetAnchor } = e.item;
//         if (sourceNode && !isNaN(sourceAnchor)) {
//           const sourceAnchorShape = sourceNode.getContainer().find(ele => (ele.get('name') === 'anchor-point' && ele.get('anchorPointIdx') === sourceAnchor));
//           console.log('sourceAnchorShape',sourceAnchorShape);
//           if(sourceAnchorShape){
//             sourceAnchorShape.set('links', sourceAnchorShape.get('links') - 1);
//           }
//
//         }
//         if (targetNode && targetAnchor && !isNaN(targetAnchor)) {
//           const targetAnchorShape = targetNode.getContainer().find(ele => (ele.get('name') === 'anchor-point' && ele.get('anchorPointIdx') === targetAnchor));
//          if(targetAnchorShape){
//            targetAnchorShape.set('links', targetAnchorShape.get('links') - 1);
//          }
//
//         }
//       }
//     })
// // after clicking on the first node, the edge is created, update the sourceAnchor
//     graph.on('afteradditem', e => {
//       console.log('afteradditem');
//       if (e.item && e.item.getType() === 'edge') {
//         graph.updateItem(e.item, {
//           sourceAnchor: sourceAnchorIdx
//         });
//       }
//     })
// // some listeners to control the state of nodes to show and hide anchor-point circles
//     graph.on('node:mouseenter', e => {
//       graph.setItemState(e.item, 'showAnchors', true);
//     })
//     graph.on('node:mouseleave', e => {
//       graph.setItemState(e.item, 'showAnchors', false);
//     })
//
//     graph.on('node:dragend', (e) => {
//       console.log(e);
//       // console.log('node:dragend',e);
//       graph.getCombos().forEach((combo) => {
//         graph.setItemState(combo, 'dragenter', false);
//       });
//     });
//     graph.on('combo:dragend', (e) => {
//       console.log(e);
//       // console.log('combo:dragend',e);
//       graph.getCombos().forEach((combo) => {
//         graph.setItemState(combo, 'dragenter', false);
//       });
//     });
//     graph.on('combo:dragenter', (e) => {
//       console.log(e);
//       // console.log('combo:dragenter',e);
//       graph.setItemState(e.item, 'dragenter', true);
//     });
//     graph.on('combo:dragleave', (e) => {
//       // console.log('combo:dragleave',e);
//       graph.setItemState(e.item, 'dragenter', false);
//     });
//
//     graph.on('combo:mouseenter', (evt) => {
//       // console.log('combo:mouseenter',evt);
//       const { item } = evt;
//       graph.setItemState(item, 'active', true);
//     });
//
//     graph.on('combo:mouseleave', (evt) => {
//       // console.log('combo:mouseleave',evt);
//       const { item } = evt;
//       graph.setItemState(item, 'active', false);
//     });
//     if (typeof window !== 'undefined')
//       window.onresize = () => {
//         if (!graph || graph.get('destroyed')) return;
//         if (!container || !container.scrollWidth || !container.scrollHeight) return;
//         graph.changeSize(container.scrollWidth, container.scrollHeight - 20);
//       };
//
//   }
}

</script>

<style>
#app{
  //width: 100vw;
  height: 100vh;
  position: relative;


}

</style>
