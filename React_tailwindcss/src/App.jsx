import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./TailwindBlocks/Pages/LandingPage";
import Vanilla from "./TailwindBlocks/Components/Vanilla";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* defined / for the homepage so it only loads when its / */}
          <Route
            path="/"
            element={<LandingPage change={handleThemeChange} />}
          ></Route>

          {/* using routes switch pages */}
          <Route
            path="/Vanilla"
            element={<Vanilla change={handleThemeChange} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
