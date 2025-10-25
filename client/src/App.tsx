import { useEffect, useState } from "react";
import SplashScreen from "./components/common/SplashScreen";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Twin List"
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <RouterProvider router={router} />;
};

export default App;
