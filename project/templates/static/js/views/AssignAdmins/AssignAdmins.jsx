/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Label, Input, Table } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx"

class AssignAdmins extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
        <Col md={10} xs={12}>
        <Card className="text-center">
          <CardBody>
          <h5>To assign admins</h5>
            <p className="description text-center">
            As a super admin you are able to...
            </p>
          </CardBody>
        </Card>
        </Col>
        <Col md={10} xs={20}>
          <Card className="card-user">
            <CardHeader>
              <CardTitle>Assign Admin</CardTitle>
            </CardHeader>
            <CardBody>
              <form>
              <FormInputs
              ncols = {["col-md-9 pr-1"]}
              proprieties = {[
                  {
                      label : "Admin Email Address",
                      inputProps : {
                          type : "email",
                          defaultValue: "example@kcl.ac.uk"
                      }
                  }
              ]}
          />
                <Row>
                  <div className="update ml-auto mr-auto">
                    <Button color="primary" round>Confirm </Button>
                  </div>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
        <Col xs={10}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Current Admins</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead className=" text-primary">
                  <th>
                    AdminID
                  </th>
                  <th>
                    Name
                  </th>
                  <th>
                    Email
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      05442
                    </td>
                    <td>
                        James Baker
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                  </tr>
                  <tr>
                    <td>
                      03468
                    </td>
                    <td>
                        Mason Porter
                    </td>
                    <td>
                      example@kcl.ac.uk
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
export default AssignAdmins;