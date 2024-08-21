import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import OpenIssuePage from "./pages/OpenIssuePage";
import CreateNewIssue from "./pages/CreateNewIIssue";
import UserPage from "./pages/UserPage";
import App from "./App";
import AuthoritiesList from "./components/AuthoritiesList";


const routes = createBrowserRouter([
    {
        path: '/',
        Component: LandingPage
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/home',
        Component: App,
        children: [
            {
                path: '/home/homePage',
                Component: HomePage
            },
            {
                path: "/home/issue",
                Component: OpenIssuePage
            },
            {
                path: '/home/post-issue',
                Component: CreateNewIssue
            },
            {
                path: '/home/user',
                Component: UserPage
            },
            {
                path: '/home/authorities',
                Component: AuthoritiesList
            }

        ]
    },
    {
        path: '/register',
        Component: Registration
    },
    {
        path: '/issue',
        Component: OpenIssuePage,
    },
    {
        path: '/createNewIssue',
        Component: CreateNewIssue
    }
    
]);

export default routes;