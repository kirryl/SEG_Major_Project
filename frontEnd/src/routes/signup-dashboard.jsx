import RegisterForm from "views/RegisterForm/RegisterForm.jsx";

var dashRoutes = [
  {
    path: "/RegisterForm",
    name: "Sign Up Form",
    component: RegisterForm
  },

  { redirect: true, path: "/", pathTo: "/RegisterForm", name: "Sign Up Form" }
];
export default dashRoutes;
