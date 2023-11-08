import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/navBar/NavBar";


const Main = () => {
    return (
        <div className="bg-slate-200">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Main;