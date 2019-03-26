import CurrentStudents from "views/CurrentStudents/CurrentStudents.jsx";
import StudentIssue from "views/StudentIssue/StudentIssue.jsx";
import AssignStudents from "views/AssignStudents/AssignStudents.jsx";
import AssignAdmins from "views/AssignAdmins/AssignAdmins.jsx";
import NewScheme from "views/NewScheme/NewScheme.jsx";

var dashRoutes = [

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

  { redirect: true, path: "/", pathTo: "/current-students", name: "Current Mentor-Mentee" }
];
export default dashRoutes;
