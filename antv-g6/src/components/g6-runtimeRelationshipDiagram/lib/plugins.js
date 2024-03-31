
export const g6Plugins = (G6)=>{

    const toolbar = new G6.ToolBar({
        // container: tc,
        className: 'g6-toolbar-ul',
        getContent: () => {
            return `
      <ul>
        <li code='add'>增加节点</li>
        <li code='undo'>撤销</li>
        <li code='group'>添加群组</li>
        <li code='save'>保存</li>
      </ul>
    `;
        },
        handleClick: (code, graph) => {
          let width = graph.cfg.width  / 2 + Math.floor(Math.random() * (100 - 50 +1)) +80
          // let height =  graph.cfg.width  / 2 + Math.floor(Math.random() * (100 - 50 +1)) +80
            if (code === 'add') {
                graph.addItem('node', {
                    id:`react-node${Math.floor(Math.random() * (100 - 50 +1)) +80}`,
                    type:'rect-node',
                    label: prompt('请输入节点名称'),
                    x: width,
                    y: 150,
                });
            } else if (code === 'undo') {
                toolbar.undo();
            } else if(code==='group') {
                graph.addItem('combo', {
                    id:`combo-${Math.floor(Math.random() * (100 - 50 +1)) +80}`,
                    label: prompt('请输入群组名称'),

                    size:100,
                    x: 300,
                    y: 150,
                });
            }else if(code==='save'){
                console.log(graph.save());
            }
        },
    });

    return{
        toolbar
    }
}
