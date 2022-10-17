import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  // recieved the dynamic content as children props
  return (
    <div>
      {/* static navbar component */}
      <Navbar />

      {/* dynamic content comes here */}
      {children}

      {/* static footer component */}
      <Footer />
    </div>
  );
};

export default Layout;
