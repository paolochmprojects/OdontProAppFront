import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import SignIn, { action as signInAction, loader as signInLoader } from "./routes/signin/SignIn";
import SignUp, { action as signUpAction, loader as signUpLoader } from "./routes/signup/SignUp";
import { action as signOutAction } from "./routes/signout/Signout"
import NotFound from "./routes/NotFound";
import DashLayout from "./routes/dashboard/DashLayout";
import MainDashboard, {loader as mainDashboardLoader} from "./routes/dashboard/MainDashboard";
import Periodontgrams from "./routes/dashboard/periodontgrams/Periodontgram";
import Contacts from "./routes/dashboard/contacts/Contacts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "signin",
                element: <SignIn />,
                action: signInAction,
                loader: signInLoader,
            },
            {
                path: "signup",
                element: <SignUp />,
                action: signUpAction,
                loader: signUpLoader,
            },
            {
                path: "signout",
                action: signOutAction,
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashLayout />,
        children: [
            {
                index: true,
                element: <MainDashboard />,
                loader: mainDashboardLoader
            },
            {
                path: "contacts",
                element: <Contacts/>
            },
            {
                path: "periodontgrams",
                element: <Periodontgrams />,
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound />,
    }

])

export default router