import Home from "../views/auth/Home";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Dashboard from "../views/Dashboard";

let routes = [
    {
        path: "/",
        component: Home,
        layout: "auth",
    },
    {
        path: "/sign-in",
        component: Login,
        layout: "auth",
    },
    {
        path: "/sign-up",
        component: Register,
        layout: "auth",
    },
    {
        path: "/dashboard",
        component: Dashboard,
        layout: "main",
    },
];
export default routes;
