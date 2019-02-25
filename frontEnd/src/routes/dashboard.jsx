import Home from "views/Home/Home.jsx";
import MyBuddy from "views/myBuddy/myBuddy.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import FAQ from "views/FAQ/FAQ.jsx";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/myBuddy",
    name: "My Buddy",
    component: MyBuddy
  },
  {
    path: "/user-page",
    name: "User Profile",
    component: UserPage
  },
  {
    path: "/faq",
    name: "FAQs",
    component: FAQ
  },

  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
