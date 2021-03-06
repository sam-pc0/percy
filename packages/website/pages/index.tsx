import type { NextPage } from "next";

import NavbarContent from "modules/common/layout/NavbarContent/NavbarContent";
import Home from "modules/Home/Home";

const HomeLayout: NextPage = () => {
  const pageName = "Home";
  return (
    <div className="app">
      <NavbarContent pageName={pageName}>
        <Home />
      </NavbarContent>
    </div>
  );
};

export default HomeLayout;
