/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx"
import { thead, tbody } from "variables/adminTable";

class AssignStudents extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
        <Col md={10} xs={12}>
        <Card className="text-center">
          <CardBody>
          <h5>Assigning students</h5>
            <p className="description text-center">
            ...</p>
          </CardBody>
        </Card>
        </Col>
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
                    Name
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                    Status
                  </th>
                  <th className="text-right">
                    Interests
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Dakota Rice
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Mentor
                    </td>
                    <td className="text-right">
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Minerva Hooper
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Mentor
                    </td>
                    <td className="text-right">
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Sage Rodriguez
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Mentee
                    </td>
                    <td className="text-right">
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Philip Chaney
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Mentor
                    </td>
                    <td className="text-right">
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