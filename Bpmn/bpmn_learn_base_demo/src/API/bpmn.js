import http from './HTTP'

export const getBpmnData = (id) => {
  return http({
    url: `/getBpmnData?id=${id}`,
    method: 'GET'
  })
}
