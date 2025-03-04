import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

function Layout({ children, scrollToSection, sectionRefs }) {
  return (
    <>
      <Header scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
