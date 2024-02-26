import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import TodoList from "../Pages/TodoList/TodoList";
import VCreateTodo from "../Pages/VCreateTodo/VCreateTodo";
import DetailTodo from "../Pages/DetailTodo/DetailTodo";
import VDeleteTodo from "../Pages/VDeleteTodo/VDeleteTodo";
import VEditTodo from "../Pages/VEditTodo/VEditTodo";
import EditTodo from "../Components/EditTodo/EditTodo";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/",
                element: <TodoList />,
            },            
            {
                path: "/create-todo",
                element: <VCreateTodo />,
            },
            {
                path: "/tasksBD/:id",
                element: <DetailTodo />,
            },
            {
                path: "/tasksBD/D/:id",
                element: <VDeleteTodo />,
            },
            {
                path: "/tasksBD/E/:id",
                element: <EditTodo />,
            },
            {
                path: "/tasksBD/E/:id/C",
                element: <VEditTodo />,
            },
            
            
        ],
    },
]);

export function Router() {
    return <RouterProvider router={router} />;
}