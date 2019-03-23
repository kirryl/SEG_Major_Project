{/*eslint-disable*/}
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx"

{/* Admins only, purpose is to view students who are currently unpaired and
    to manually pair them with a mentor */}
class AssignStudents extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
      {/*sets the column size for card*/}
        <Col md={10} xs={10}>
          <Card className="card-user">
          {/*section where admins are able to manually assign mentors with mentees by manually inputting mentor and mentee emails*/}
            <CardHeader>
              <CardTitle>Manually Assign Mentor with Mentee</CardTitle>
            </CardHeader>
            <CardBody>
              <form>
              {/*admin manually inputs mentor email to be assigned with mentee*/}
              {/*example email that is seen by user*/}
              {/*admin manually inputs mentee email to be assigned with mentor*/}
              {/*example email that is seen by user*/}
              <FormInputs
              ncols = {["col-md-5 pr-1" , "col-md-5 pr-1" ]}
              proprieties = {[
                  {
                      label : "Mentor Email Address",
                      inputProps : {
                          type : "email",
                          defaultValue: "example@kcl.ac.uk"
                      }
                  },
                  {
                      label : "Mentee Email Address",
                      inputProps : {
                          type : "email",
                          placeholder: "example@kcl.ac.uk"
                      }
                  }
              ]}
          />
                <Row>
                {/*Update button to assign mentor with mentee*/}
                  <div className="update ml-auto mr-auto">
                    <Button color="primary" round>Update </Button>
                  </div>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
        {/*sets the column size for card*/}
        <Col xs={10}>
        {/*a list of students who are yet to be assigned*/}
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Students to be assigned</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead className=" text-primary">
                {/*defines name header cell*/}
                  <th>
                    Email
                  </th>
                  {/*defines email header cell*/}
                  <th>
                    First Name
                  </th>
                  <th>
                    Preferred Name
                  </th>
                  <th>
                    Last Name
                  </th>
                  <th>
                    Interest 1
                  </th>
                  <th>
                    Interest 2
                  </th>
                  <th>
                    Interest 3
                  </th>
                  <th>
                    Interest 4
                  </th>
                  <th>
                    Interest 5
                  </th>
                  <th>
                    Year
                  </th>
                  {/*defines gender header cell*/}
                  <th>
                    Gender
                  </th>
                  <th>
                    Prefer same gender?
                  {/*defines interests header cell*/}
                    Interests
                    </th>
                   </thead>
                   <tbody>
                   {/*rows in table*/}
                     <tr>
                       <td>
                         k1763918@kcl.ac.uk
                    </td>
                    <td>
                      Mananchaya
                    </td>
                    <td>
                      Mai
                    </td>
                    <td>
                      Khumtai
                    </td>
                    <td>
                      Cooking
                    </td>
                    <td>
                      Yoga
                    </td>
                    <td>
                      History
                    </td>
                    <td>
                      Japanese
                    </td>
                    <td>
                      Web development
                    </td>
                    <td>
                      Second
                    </td>
                    <td>
                      Female
                    </td>
                    <td>
                      No
                    </td>
                  </tr>
                  <tr>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Jason
                    </td>
                    <td>
                      Jay
                    </td>
                    <td>
                      Steele
                    </td>
                    <td>
                      Movies
                    </td>
                    <td>
                    Movies
                    </td>
                    <td>
                    Movies
                    </td>
                    <td>
                    Movies
                    </td>
                    <td>
                    Movies
                    </td>
                    <td>
                      Third
                    </td>
                    <td>
                      Male
                    </td>
                    <td>
                      No
                    </td>
                  </tr>
                  <tr>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Jason
                    </td>
                    <td>
                      Jay
                    </td>
                    <td>
                      Steele
                    </td>
                    <td>
                      Movies
                    </td>
                    <td>
                    Movies
                    </td>
                    <td>
                    Movies
                    </td>
                    <td>
                    Movies
                    </td>
                    <td>
                    Movies
                    </td>
                    <td>
                      Third
                    </td>
                    <td>
                      Male
                    </td>
                    <td>
                      No
                    </td>
                  </tr>
                </tbody>
              </Table>
              </CardBody>
            </Card>
          </Col>
      </Row>
    </div>
  );
}
}

export default AssignStudents;
