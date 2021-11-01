import type { NextPage } from "next";

import NavbarContent from "modules/common/layout/NavbarContent/NavbarContent";
import Documentation from "modules/Documentation/Documentation";

const DocumentationLayout: NextPage = () => {
  const pageName = "Documentation";
  return (
    <div className="app">
      <NavbarContent pageName={pageName}>
        <Documentation />
      </NavbarContent>
    </div>
  );
};

export default DocumentationLayout;
