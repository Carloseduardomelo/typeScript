import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Logado from "../pages/logado";

export const router = createBrowserRouter([
{
    path: '/',
    element: <App/>
},
{
    path: '/logado/:id',
    element: <Logado/>,
}
])