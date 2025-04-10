import React, { useRef } from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

import { ToastContainer } from "react-toastify";

const Home = () => {
  // Create refs for each section
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Layout
        scrollToSection={scrollToSection}
        sectionRefs={{
          section1Ref,
          section2Ref,
          section3Ref,
          section4Ref,
          section5Ref,
          section6Ref,
          section7Ref,
        }}
      >
        <ToastContainer />

        {/* Home Section Hero Banner */}
        <Section1 ref={section1Ref} />

        {/* Home Section About */}
        <Section2 ref={section2Ref} />

        {/* Home Section Menu */}
        <Section3 ref={section3Ref} />

        {/* Home Section Promotion */}
        <Section4 ref={section4Ref} />

        {/* Home Section Shop */}
        <Section5 ref={section5Ref} />

        {/* Home Section Blog */}
        <Section6 ref={section6Ref} />

        {/* Home Section Contact */}
        <Section7 ref={section7Ref} />
      </Layout>
    </>
  );
};

export default Home;
