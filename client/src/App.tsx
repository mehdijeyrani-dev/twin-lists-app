import { useEffect, useState } from "react";
import SplashScreen from "./components/common/SplashScreen";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <div className="p-5 animate-opacity">App Page</div>;
};

export default App;
