export const setEncoded = (link, name, data) => {
  // 把xml转换为URI，下载要用到的
  const encodedData = encodeURIComponent(data)
  // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
  console.log(link, name, data)
  let xmlFile = new File([data], 'test.bpmn')
  console.log(xmlFile)
  if (data) {
    link.className = 'active'
    link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
    link.download = name
    link.click()
  }
}
