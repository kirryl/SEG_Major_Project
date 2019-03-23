{/*eslint-disable*/}
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Label, Input, Table } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx"

{/* Super Admins only, manage admins */}
class AssignAdmins extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
      {/*sets the column size for card*/}
        <Col md={10} xs={12}>
        {/*centers the text cointained in the card*/}
        <Card className="text-center">
          <CardBody>
          <h5>To assign admins</h5>
          {/*center the paragraph*/}
            <p className="description text-center">
            As a super admin you are able to...
            </p>
          </CardBody>
        </Card>
        </Col>
        {/*sets the column size for card*/}
        <Col md={10} xs={20}>
        {/*type of card*/}
          <Card className="card-user">
            <CardHeader>
              <CardTitle>Assign Admin</CardTitle>
            </CardHeader>
            <CardBody>
              <form>
              {/*section where super admins are able to manually assign admins via email*/}
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
                {/*Confirm button to assign a student admin privelages*/}
                  <div className="update ml-auto mr-auto">
                    <Button color="primary" round>Confirm </Button>
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
                <CardTitle tag="h4">Current Admins</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead className=" text-primary">
                {/*defines AdminID header cell */}
                  <th>
                    AdminID
                  </th>
                  {/*defines name header cell */}
                  <th>
                    Name
                  </th>
                  {/*defines email header cell*/}
                  <th>
                    Email
                  </th>
                </thead>
                <tbody>
                  <tr>
                  {/*rows in table */}
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
      <Row>
        <Col md={5}>
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
        </Row>
    </div>
  );
}
}
export default AssignAdmins;
