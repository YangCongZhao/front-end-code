export const registerCom = (G6)=>{
    G6.registerNode('rect-node', {
        // draw anchor-point circles according to the anchorPoints in afterDraw
        afterDraw(cfg, group) {
            const bbox = group.getBBox();
            //获取元素的锚点
            const anchorPoints = this.getAnchorPoints(cfg)
            //添加小圆点
            anchorPoints.forEach((anchorPos, i) => {
                group.addShape('circle', {
                    attrs: {
                        r: 5,
                        x: bbox.x + bbox.width * anchorPos[0],
                        y: bbox.y + bbox.height * anchorPos[1],
                        fill: '#fff',
                        stroke: '#5F95FF'
                    },
                    // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                    name: `anchor-point`, // the name, for searching by group.find(ele => ele.get('name') === 'anchor-point')
                    anchorPointIdx: i, // flag the idx of the anchor-point circle
                    links: 0, // cache the number of edges connected to this shape
                    visible: false, // invisible by default, shows up when links > 1 or the node is in showAnchors state
                })
            })
        },
        getAnchorPoints(cfg) {
            return cfg.anchorPoints || [[0, 0.5], [0.33, 0], [0.66, 0], [1, 0.5], [0.33, 1], [0.66, 1]];
        },
        // response the state changes and show/hide the link-point circles
        setState(name, value, item) {
            if (name === 'showAnchors') {
                const anchorPoints = item.getContainer().findAll(ele => ele.get('name') === 'anchor-point');
                anchorPoints.forEach(point => {
                    if (value || point.get('links') > 0) point.show()
                    else point.hide()
                })
            }
        }
    }, 'rect')
    const { getLabelPosition, transform } = G6.Util;
    G6.registerEdge(
        "arrow-running",
        {
            afterDraw(cfg, group) {
                // get the first shape in the group, it is the edge's path here=
                const shape = group.get("children")[0];

                const arrow = group.addShape("marker", {
                    attrs: {
                        x: 16,
                        y: 0,
                        r: 5,
                        lineWidth: 2,
                        stroke: "#3370ff",
                        fill: "#fff",
                        symbol: (x, y, r) => {
                            console.log(r);
                            return [
                                ["M", x - 6, y - 4],
                                ["L", x - 2, y],
                                ["L", x - 6, y + 4]
                            ];
                        }
                    }
                });
                // animation for the red circle
                arrow.animate(
                    (ratio) => {
                        // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
                        // get the position on the edge according to the ratio
                        const tmpPoint = shape.getPoint(ratio);
                        const pos = getLabelPosition(shape, ratio);
                        let matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                        matrix = transform(matrix, [
                            ["t", -tmpPoint.x, -tmpPoint.y],
                            ["r", pos.angle],
                            ["t", tmpPoint.x, tmpPoint.y]
                        ]);

                        // returns the modified configurations here, x and y here
                        return {
                            x: tmpPoint.x,
                            y: tmpPoint.y,
                            matrix
                        };
                    },
                    {
                        repeat: true, // Whether executes the animation repeatly
                        duration: 1000 // the duration for executing once
                    }
                );
            }
        },
        "cubic" // extend the built-in edge 'cubic'
    );
}
