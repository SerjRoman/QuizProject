import { LoginLayout } from "@/pages/layouts";
import App from "./App";

export const routes = [
    {
        element:<LoginLayout/> ,
        children: [
            {
                path: "/",
                element:<App/>
            }
        ]
    }
]
