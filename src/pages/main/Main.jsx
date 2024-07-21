import React from "react";
import Header from "../../layouts/Header/Header";
import NavBar from "../../layouts/Navigation/NavBar";
import Dialer from "../../components/ui/dialer/Dialer_button";
import ProductSection from "../../layouts/Main-Sections/Product-section/Product_Section";
import { Footer } from "../../layouts/Footer";
import Layout from "../../layouts/main";
import BlogSection from "../../layouts/Main-Sections/Blogs-section/blogSection";
import { ServiceSection } from "../../layouts/Main-Sections/Service-section/Service_section";
import { BackToTop } from "../../components/ui/backToTop/BackToTop";
import { ProductProvider } from "../../context/ProductProvider";
export const Main = () => {
  return (
    <ProductProvider>
      <Header />
      <NavBar />
      <Layout>
        <ProductSection />
        <ServiceSection />
        <BlogSection />
      </Layout>
      <BackToTop />
      <Footer />
    </ProductProvider>
  );
};
