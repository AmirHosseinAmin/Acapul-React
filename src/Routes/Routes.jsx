import { Products } from "../pages/Products/Products";
import { ProductsList } from "../pages/ProductsList/ProductsList";
import { AboutUs } from "../pages/aboutUs/AboutUs";
import { BlogList } from "../pages/blogList/BlogList";
import { Blogs } from "../pages/blogs/Blogs";
import { ContactUs } from "../pages/contactUs/ContactUS";
import { Main } from "../pages/main/Main";
import Profile from "../pages/profile/Profile";

export const RoutesMaster = [
  {
    Path: "/",
    Component: <Main />,
    Title: "main-acapul",
  },
  {
    Path: "/contact-us",
    Component: <ContactUs />,
    Title: "Contact Us",
  },
  {
    Path: "/blogs",
    Component: <Blogs />,
    Title: "Blogs",
  },
  {
    Path: "/blog-list",
    Component: <BlogList />,
    Title: "Blog List",
  },
  {
    Path: "/about-us",
    Component: <AboutUs />,
    Title: "About Us",
  },
  {
    Path: "/products",
    Component: <Products />,
    Title: "Products",
  },
  {
    Path: "/products-list",
    Component: <ProductsList />,
    Title: "Products List",
  },
  {
    Path: "/profile",
    Component: <Profile />,
    Title: "Profile",
  },
];
