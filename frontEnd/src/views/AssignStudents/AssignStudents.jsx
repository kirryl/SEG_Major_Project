/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx"

class AssignStudents extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
        <Col md={10} xs={10}>
          <Card className="card-user">
            <CardHeader>
              <CardTitle>Manually Assign Mentor with Mentee</CardTitle>
            </CardHeader>
            <CardBody>
              <form>
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
                  <div className="update ml-auto mr-auto">
                    <Button color="primary" round>Update </Button>
                  </div>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
        <Col xs={10}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Students to be assigned</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
              <thead className=" text-primary">
                  <th>
                    Email
                  </th>
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
                  <th>
                    Gender
                  </th>
                  <th>
                    Prefer same gender?
                  </th>
                </thead>
                <tbody>
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