import './App.css'
import Guide from "./containers/Guide";
import Login from "./containers/Login/Login";
import {HashRouter,Routes,Route} from "react-router-dom";

const App = () => {

   return  (
           <HashRouter>
               <Routes>
                   <Route path={'/'} element={<Guide />}></Route>
                   <Route path={'/login'} element={<Login />}></Route>
               </Routes>
           </HashRouter>
       )


}

export default App;
