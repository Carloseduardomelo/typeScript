import { createBrowserRouter } from "react-router-dom";
import Card from "../components/card/card";
import App from "../App";

export const router = createBrowserRouter([
{
    path: '/',
    element: <App/>
},
{
    path: 'card',
    element: <Card numb={2}/>
}
])