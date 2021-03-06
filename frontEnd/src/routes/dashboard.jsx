import Home from "views/Home/Home.jsx";
import MyBuddy from "views/myBuddy/myBuddy.jsx";
import UserPage from "views/UserPage/UserPage.jsx";
import FAQ from "views/FAQ/FAQ.jsx";
import RegisterForm from "views/RegisterForm/RegisterForm.jsx";
import SignedUp from "views/SignedUp/SignedUp.jsx";
import CurrentStudents from "views/CurrentStudents/CurrentStudents.jsx";
import StudentIssue from "views/StudentIssue/StudentIssue.jsx";
import AssignStudents from "views/AssignStudents/AssignStudents.jsx";
import AssignAdmins from "views/AssignAdmins/AssignAdmins.jsx";
import NewScheme from "views/NewScheme/NewScheme.jsx";

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
  {
    path: "/current-students",
    name: "Current Mentor-Mentee",
    component: CurrentStudents
  },
  {
    path: "/student-issue",
    name: "Students Issues",
    component: StudentIssue
  },
  {
    path: "/AssignStudents",
    name: "Students to be assigned",
    component: AssignStudents
  },
  {
    path: "/AssignAdmins",
    name: "Current Admins",
    component: AssignAdmins
  },
  {
    path: "/new-scheme",
    name: "Create a new scheme",
    component: NewScheme
  },
  {
    path: "/RegisterForm",
    name: "Sign Up Form",
    component: RegisterForm
  },
  {
    path: "/SignedUp",
    name: "Students who signed up",
    component: SignedUp
  },

  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
