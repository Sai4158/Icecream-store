import React, { useEffect } from "react";
import LandingPage from "./TailwindBlocks/Pages/LandingPage";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("light");

  //use effect
  useEffect(() => {
    // if this is not dark then remove dark theme
    //this is coming from tailwind config and index css

    
    //this will add class="dark";
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } 
    //this will remove class="dark";
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //create a function to change a theme

  const handlethemechange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //return
  return (
    <div>
      {/* Landing page has all the comopents */}
      {/* send via props for the handlethemechange function */}
      <LandingPage change={handlethemechange} />
    </div>
  );
};

export default App;
