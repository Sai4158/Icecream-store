import React from "react";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";
const Vanilla = ({ change }) => {
  return (
    <div className="bg-black">
      {/* put the navbar here */}
      <Navbar change={change} />
      <img
        className=" mx-auto h-[100vh]"
        src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KUFWIPXROII6ZLAWR67XDFGNPA.jpg&w=1440"
        alt=""
      />
      <FooterSection />
    </div>
  );
};

export default Vanilla;
