import { createBrowserRouter } from "react-router-dom"; 
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/cadastro", element: <Cadastro />},

])

export default router;
