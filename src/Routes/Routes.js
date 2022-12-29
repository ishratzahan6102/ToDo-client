import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login";
import AddTask from "../Pages/Add Task/AddTask";
import CompletedTask from "../Pages/Completed Task/CompletedTask";
import Home from "../Pages/Home/Home";
import MyTask from "../Pages/My Task/MyTask";
import Register from "../Register";

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
                path: '/Home',
                element: <Home></Home>
            },
            {
                path: '/Add Task',
                element: <AddTask></AddTask>
            },
            {
                path: '/My Task',
                element: <MyTask></MyTask>
            },
            {
                path: '/Completed Task',
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