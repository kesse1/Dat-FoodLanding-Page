import React from "react";
import HeaderPage from "./HeaderPage";
import HeroPage from "./HeroPage";
import InfoPage from "./InfoPage";

const indexPage = () => {
  return (
    <div className="bg-colored">
      <HeaderPage/>
      <HeroPage/>
      <InfoPage/>
    </div>
  );
};

export default indexPage;
