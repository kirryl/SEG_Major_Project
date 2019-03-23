// ##############################
// // // table head data and table body data for Tables view
// #############################

const thead = ["Mentor Email", "Mentee Email", "Compatibility"];
const tbody = [
  {
    className: "table-success",
    data: ["k1763918@kcl.ac.uk", "k192345@kcl.ac.uk", "74%"]
  },
  {
    className: "",
    data: ["example@kcl.ac.uk", "example@kcl.ac.uk", "82%"]
  },
  {
    className: "table-info",
    data: ["example@kcl.ac.uk", "example@kcl.ac.uk", "76%"]
  },
  {
    className: "",
    data: ["example@kcl.ac.uk", "example@kcl.ac.uk", "95%"]
  },
  {
    className: "table-danger",
    data: ["example@kcl.ac.uk", "example@kcl.ac.uk", "80%"]
  },
  { className: "", 
  data: ["example@kcl.ac.uk", "example@kcl.ac.uk", "73%"] 
  },
  {
    className: "table-warning",
    data: ["example@kcl.ac.uk", "example@kcl.ac.uk", "88%"]
  }
];

// data for <thead> of table in TableList view
// data for <tbody> of table in TableList view
export { thead, tbody };
