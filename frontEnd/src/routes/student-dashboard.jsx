import MyBuddy from "views/myBuddy/myBuddy.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

var dashRoutes = [
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

  { redirect: true, path: "/", pathTo: "/myBuddy", name: "My Buddy" }
];
export default dashRoutes;
