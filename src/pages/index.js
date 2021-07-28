import { useEffect } from "react";

const Home = () => {
  const redirect = () => {
    window.location = "/login";
  };

  useEffect(() => {
    // window is accessible here.
    setTimeout(redirect, 2000);
  }, []);

  return <div>Redirecting...</div>;
};

export default Home;
