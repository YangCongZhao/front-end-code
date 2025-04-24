import './App.css'
import {useEffect, useRef} from "react";
const App = () => {
    const ref = useRef<HTMLDivElement>(null!)
    useEffect(()=>{
       ref.current.style.opacity = '1'
    },[])
   return <div className = "page guide-page"  ref={ref}>
       <img src={require('./images/guide-icon.png')} className={'main-photo'} alt=""/>
       <div className={'title'}>欢乐购</div>
       <img src={require('./images/slogan-icon.png')} alt="" className={'sub-pic'}/>
       <div className={'iconfont arrow-icon'}>&#xe60c;</div>
  </div>
}

export default App;
