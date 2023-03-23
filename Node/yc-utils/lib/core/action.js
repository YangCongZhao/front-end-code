const inquirer= require("inquirer");
const action = (project,args)=>{
    inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'你的名字'
        }
    ],()=>{}).then(answer=>{
        console.log(answer);
    })

}
module.exports = action
