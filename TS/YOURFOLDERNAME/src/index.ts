import { AxiosRequesConfig } from "./types"
import xhr from "./xhr"
function axios(config:AxiosRequesConfig):void{
  xhr(config)
}
export default axios