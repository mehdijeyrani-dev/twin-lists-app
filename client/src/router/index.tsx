import Dashboard from "@/layouts/Dashboard";
import Inbox from "@/pages/Inbox";
import SearchResults from "@/pages/SearchResults";
import Today from "@/pages/Today";
import Upcoming from "@/pages/Upcoming";
import Workspaces from "@/pages/Workspaces";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
]);

export default router;
