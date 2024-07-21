import React from "react";
import Header from "../../layouts/Header/Header";
import { Footer } from "../../layouts/Footer";
import { Topic } from "../../layouts/Topic/Topic";
import Dialer from "../../components/ui/dialer/Dialer_button";
import { BackToTop } from "../../components/ui/backToTop/BackToTop";

export const Blogs = () => {
  return (
    <div>
      <Header />
      <Topic />

      <Dialer />
      <BackToTop />
      <Footer />
    </div>
  );
};
