import Dashboard from "@/layouts/Dashboard";
import Inbox from "@/pages/Inbox";
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
    ],
  },
]);

export default router;
