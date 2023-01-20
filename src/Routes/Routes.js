import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login";
import AddTask from "../Pages/Add Task/AddTask";
import CompletedTask from "../Pages/Completed Task/CompletedTask";
import Home from "../Pages/Home/Home";
import MyTask from "../Pages/My Task/MyTask";
import Register from "../Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: '/myTask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedTask',
                element: <CompletedTask></CompletedTask>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
        ]
    }
])