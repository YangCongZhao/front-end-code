import { AxiosRequesConfig } from "./types"
export default function xhr(config:AxiosRequesConfig):void{
  const {data = null,url,method = 'get'} = config
  const request = new XMLHttpRequest();
  request.open(method.toLocaleLowerCase(),url,true)
  request.send(data);
}