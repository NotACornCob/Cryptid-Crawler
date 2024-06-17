import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Cryptids from "./pages/Cryptids"

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/Form",
        element: <Form />,
        errorElement: <ErrorPage /> 
    },
    {
        path: "/Cryptids",
        element: <Cryptids />, 
        errorElement: <ErrorPage />
    }
]