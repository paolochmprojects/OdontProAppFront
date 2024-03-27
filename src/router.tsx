import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";
import SignIn, { action as signInAction, loader as signInLoader } from "./routes/signin/SignIn";
import SignUp, { action as signUpAction, loader as signUpLoader } from "./routes/signup/SignUp";
import NotFound from "./routes/NotFound";

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
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound />,
    }

])

export default router