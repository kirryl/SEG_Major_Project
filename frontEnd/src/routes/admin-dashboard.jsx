import CurrentStudents from "views/CurrentStudents/CurrentStudents.jsx";
import StudentIssue from "views/StudentIssue/StudentIssue.jsx";
import AssignStudents from "views/AssignStudents/AssignStudents.jsx";

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

  { redirect: true, path: "/", pathTo: "/current-students", name: "Current Mentor-Mentee" }
];
export default dashRoutes;
