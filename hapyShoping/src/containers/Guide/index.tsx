import './index.css'
import React, {useCallback, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
const useRefAnimation= ()=>{
    const ref = useRef<HTMLDivElement>(null!)
    useEffect(()=>{
        ref.current.style.opacity = '1'
    },[])
    return ref
}
const Guide = () => {
    const ref = useRefAnimation()
    const navigate =   useNavigate()
    const login:()=>void = useCallback(():void => {
        navigate('/login')
    },[])
    return <div className = "page guide-page"  ref={ref}>
        <img src={require('../../images/guide-icon.png')} className={'main-photo'} alt=""/>
        <div className={'title'}>欢乐购 </div>
        <img src={require('../../images/slogan-icon.png')} alt="" className={'sub-pic'}/>
        <div onClick={login} className={'iconfont arrow-icon'}>&#xe60c; </div>
    </div>
}

export default Guide;
