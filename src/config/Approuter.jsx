import { BrowserRouter,Route,Router ,Routes} from "react-router-dom";
import Home from "../screens/Home";
import InstituteDashboard from "../screens/Institute/InstituteDashboard";
import Login from "../screens/public_route/Login";
import Registrationform from "../screens/public_route/Registrationform";
import Result from "../screens/public_route/Result";
import Signup from "../screens/Signup";


export default function AppRouter(){
    return(
        <>
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="Registrationform" element={<Registrationform/>}/>
            <Route path="result" element={<Result />}/>
            <Route path="InstituteDashboard/*" element={<InstituteDashboard />}/>

                
           </Routes>
        </BrowserRouter>
        </>
    )

}