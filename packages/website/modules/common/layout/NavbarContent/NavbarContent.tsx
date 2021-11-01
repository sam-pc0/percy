import { ReactNode } from "react";
import Head from "next/head";

import Footer from "modules/common/component/Footer/Footer";
import Navbar from "modules/common/component/Navbar/Navbar";

interface Props {
  children: ReactNode;
  pageName: string;
}

const NavbarContent: React.FC<Props> = ({ pageName, children }: Props) => {
  return (
    <>
      <Head>
        <title>{`Percy | ${pageName}`}</title>
        <meta name="description" content="Home of Percy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar activePage={pageName} />
      <div className="margin-t-5">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default NavbarContent;
