import Welcome from "views/Welcome/Welcome.jsx";

var dashRoutes = [
  {
    path: "/Welcome",
    name: "Welcome",
    component: Welcome
  },

  { redirect: true, path: "/", pathTo: "/Welcome", name: "Welcome" }
];
export default dashRoutes;
