// Pages
import HomePage from "../routes/Home/home.page";
import AboutPage from "../routes/About/about.page";
import BlogsPage from "../routes/Blog/blogs.page";
import BlogPage from "../routes/Blog/blog.page";

export default [
  {
    path: "/",
    render: HomePage,
    exact: true,
  },
  {
    path: "/about",
    render: AboutPage,
    exact: true,
  },
  {
    path: "/blogs",
    render: BlogsPage,
    exact: true,
  },
  {
    path: "/blogs/:slug",
    render: BlogPage,
    exact: true,
  },
];
