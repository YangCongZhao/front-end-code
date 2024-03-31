import {g6Plugins} from "@/components/g6-runtimeRelationshipDiagram/lib/plugins";
import {registerCom} from "@/components/g6-runtimeRelationshipDiagram/lib/registerCom";
import {processParallelEdgesOnAnchorPoint} from './processParallelEdgesOnAnchorPoint'
const data = {
    nodes: [
        // { id: 'node1', x: 350, y: 100 },
        // { id: 'node2', x: 350, y: 250 },
    ],
    edges: [
    ],
    combos: [
    ],
};
let sourceAnchorIdx, targetAnchorIdx;
export const initG6RRD = (G6,container)=>{

    const width = container.scrollWidth;
    const height = (container.scrollHeight || 500) - 20;
    //创建toolbar
    const {toolbar} = g6Plugins(G6)
    //创建自定义组件
    registerCom(G6)
    //加载
    const graph = new G6.Graph({
        container: container,
        width,
        height,
        groupByTypes: false,
        modes: {
            default: [
                'drag-node',
                // config the shouldBegin and shouldEnd to make sure the create-edge is began and ended at anchor-point circles
                {
                    type: 'create-edge',
                    shouldBegin: e => {
                        // avoid beginning at other shapes on the node
                        if (e.target && e.target.get('name') !== 'anchor-point') return false;
                        sourceAnchorIdx =  e.target.get('anchorPointIdx');
                        e.target.set('links', e.target.get('links') + 1); // cache the number of edge connected to this anchor-point circle
                        return true;
                    },
                    shouldEnd: e => {
                        // avoid ending at other shapes on the node
                        if (e.target && e.target.get('name') !== 'anchor-point') return false;
                        if (e.target) {
                            targetAnchorIdx = e.target.get('anchorPointIdx');
                            e.target.set('links', e.target.get('links') + 1);  // cache the number of edge connected to this anchor-point circle
                            return true;
                        }
                        targetAnchorIdx = undefined
                        return true;
                    },
                    // update the sourceAnchor
                    // getEdgeConfig: () => {
                    //   return {
                    //     sourceAnchor: sourceAnchorIdx
                    //   }
                    // }
                },
                'drag-canvas', 'drag-node', 'drag-combo', 'collapse-expand-combo', 'click-select'
            ],
        },
        defaultCombo: {
            type: 'rect',
            size: [40, 10], // The minimum size of the Combo
            padding: [30, 20, 10, 20],
            style: {
                lineWidth: 1,
            },
            labelCfg: {
                refY: 10,
                refX: 20,
                position: 'top',
            },
        },
        comboStateStyles: {
            dragenter: {
                lineWidth: 4,
                stroke: '#FE9797',
            },
        },
        plugins:[toolbar],
        defaultNode: {
            type: 'rect-node',
            style: {
                fill: '#eee',
                stroke: '#ccc',
            }
        },
        defaultEdge: {
                type: "arrow-running",
                style: {
                    lineWidth: 3,
                    stroke: "#bae7ff"
                }
        },
    });
    // graph.sourceAnchorIdx = sourceAnchorIdx
    // graph.targetAnchorIdx = targetAnchorIdx
    graph.data(data);
    graph.render();





        graph.on('aftercreateedge', (e) => {
            graph.updateItem(e.edge, {
                sourceAnchor: sourceAnchorIdx,
                targetAnchor: targetAnchorIdx
            })
            // update the curveOffset for parallel edges
            const edges = graph.save().edges;
            processParallelEdgesOnAnchorPoint(edges);
            graph.getEdges().forEach((edge, i) => {
                graph.updateItem(edge, {
                    curveOffset: edges[i].curveOffset,
                    curvePosition: edges[i].curvePosition,
                });
            });
        });

        graph.on('afterremoveitem', e => {
            console.log('afterremoveitem',e);
            if (e.item && e.item.source && e.item.target) {
                const sourceNode = graph.findById(e.item.source);
                const targetNode = graph.findById(e.item.target);
                const { sourceAnchor, targetAnchor } = e.item;
                if (sourceNode && !isNaN(sourceAnchor)) {
                    const sourceAnchorShape = sourceNode.getContainer().find(ele => (ele.get('name') === 'anchor-point' && ele.get('anchorPointIdx') === sourceAnchor));
                    if(sourceAnchorShape){
                        sourceAnchorShape.set('links', sourceAnchorShape.get('links') - 1);
                    }

                }
                if (targetNode && targetAnchor && !isNaN(targetAnchor)) {
                    const targetAnchorShape = targetNode.getContainer().find(ele => (ele.get('name') === 'anchor-point' && ele.get('anchorPointIdx') === targetAnchor));
                    if(targetAnchorShape){
                        targetAnchorShape.set('links', targetAnchorShape.get('links') - 1);
                    }
                }
            }
        })
        graph.on('afteradditem', e => {
            console.log('afteradditem',sourceAnchorIdx);
            if (e.item && e.item.getType() === 'edge') {
                graph.updateItem(e.item, {
                    sourceAnchor: sourceAnchorIdx
                });
            }
        })
        graph.on('node:mouseenter', e => {
            graph.setItemState(e.item, 'showAnchors', true);
        })

        graph.on('node:mouseleave', e => {
            graph.setItemState(e.item, 'showAnchors', false);
        })

        graph.on('node:dragend', (e) => {
            console.log(e);
            // console.log('node:dragend',e);
            graph.getCombos().forEach((combo) => {
                graph.setItemState(combo, 'dragenter', false);
            });
        });

        graph.on('combo:dragend', (e) => {
            console.log(e);
            // console.log('combo:dragend',e);
            graph.getCombos().forEach((combo) => {
                graph.setItemState(combo, 'dragenter', false);
            });
        });

        graph.on('combo:dragenter', (e) => {
            console.log(e);
            // console.log('combo:dragenter',e);
            graph.setItemState(e.item, 'dragenter', true);
        });

        graph.on('combo:dragleave', (e) => {
            // console.log('combo:dragleave',e);
            graph.setItemState(e.item, 'dragenter', false);
        });

        graph.on('combo:mouseenter', (evt) => {
            // console.log('combo:mouseenter',evt);
            const { item } = evt;
            graph.setItemState(item, 'active', true);
        });

        graph.on('combo:mouseleave', (evt) => {
            // console.log('combo:mouseleave',evt);
            const { item } = evt;
            graph.setItemState(item, 'active', false);
        });




}
