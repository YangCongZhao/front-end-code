const Login = ()=>{
    return (
       <div className = "page login-page">
           <div className={'tab'}>
               <div className={'tab-item tab-item-left'}>登录</div>
               <div className={'tab-item tab-item-right'}>注册</div>
           </div>
           <div className={'form'}>
               <div className={'form-item'}>
                   <div className={'form-item-title'}>手机号</div>
                   <input placeholder={'请输入手机号'} className={'form-item-input'}/>
               </div>
               <div className={'form-item'}>
                   <div className={'form-item-title'}>密码</div>
                   <input placeholder={'请输入手机号'} className={'form-item-input'}/>
               </div>

           </div>
       </div>
    )
}
export default Login