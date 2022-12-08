export type Method = 'get' | 'GET' | 'delete' | 'Delete' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'POST' | 'post' | 'put' | 'PUT' | 'patch' | 'PATCH'
export interface AxiosRequesConfig{
  url:string,
  method?:Method
  data?:any
  params?:any
}