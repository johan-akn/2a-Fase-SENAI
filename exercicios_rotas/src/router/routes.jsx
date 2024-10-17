import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Numeros712 from "../pages/Numeros712";
import MaiorNum from "../pages/MaiorNum";
import Pares from "../pages/Pares";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/numeros", element: <Numeros712 />},
    {path: "/pares", element: <Pares />},
    {path: "/maior", element: <MaiorNum />},
])

export default router;
