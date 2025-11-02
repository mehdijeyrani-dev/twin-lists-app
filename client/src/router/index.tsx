import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "@/layouts/Dashboard";
import Inbox from "@/pages/Inbox";
import Login from "@/pages/Login";
import SearchResults from "@/pages/SearchResults";
import Today from "@/pages/Today";
import Upcoming from "@/pages/Upcoming";
import Workspaces from "@/pages/Workspaces";
import { createBrowserRouter, Navigate } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Inbox />,
      },
      { path: "/today", element: <Today /> },
      { path: "/search", element: <SearchResults /> },
      { path: "/upcoming", element: <Upcoming /> },
      { path: "/workspaces", element: <Workspaces /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);

export default router;
