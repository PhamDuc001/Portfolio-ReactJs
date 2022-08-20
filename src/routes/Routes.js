import Home from "~/pages/Home";
import About from "~/pages/About";
import Blog from "~/pages/Blog";
import Contact from "~/pages/Contact";
import Experience from "~/pages/Experience";
import Service from "~/pages/Service";
import Works from "~/pages/Works";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/blog", component: Blog },
  { path: "/contact", component: Contact },
  { path: "/experience", component: Experience },
  { path: "/service", component: Service },
  { path: "/works", component: Works },
];

export default publicRoutes;
