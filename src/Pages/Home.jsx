import React from "react";
import Navbar from "../Components/Navbar";
import CaptionCarousel from "../Components/Slider";
import Footer from "./Footer";


// import Footer2 from "./Footer2";
// import Movies from "./Movies";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CaptionCarousel />
      {/* <Movies /> */}
      <Footer />
      {/* <Footer2 /> */}
    </div>
  );
}
