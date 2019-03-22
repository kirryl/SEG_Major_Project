/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table, FormGroup,
  Label, Input } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

class StudentIssue extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
          <Col xs={10}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Students to be verified</CardTitle>
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
                  <th>
                    Proof
                  </th>
                  <th>
                    Verify?
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    Mason Porter
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Fresher - Sixth Form
                    </td>
                    <td>
                      Yes
                    </td>
                    <td>
                    <div className="form-check-radio form-check-inline">
                      <Label className="form-check-label">
                          <Input type="radio" name="exampleRadios1" id="exampleRadios11" value="option1" />
                          <span className="form-check-sign"></span>
                      </Label>
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    Mason Porter
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                    Fresher - Sixth Form
                    </td>
                    <td>
                      No
                    </td>
                    <td>
                    <div className="form-check-radio form-check-inline">
                      <Label className="form-check-label">
                          <Input type="radio" name="exampleRadios1" id="exampleRadios11" value="option1" />
                          <span className="form-check-sign"></span>
                      </Label>
                    </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    Mason Porter
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                    Fresher - Sixth Form
                    </td>
                    <td>
                      Yes
                    </td>
                    <td>
                    <div className="form-check-radio form-check-inline">
                      <Label className="form-check-label">
                          <Input type="radio" name="exampleRadios1" id="exampleRadios11" value="option1" />
                          <span className="form-check-sign"></span>
                      </Label>
                    </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
              </CardBody>
              <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round>Update</Button>
                      <Button href="./student-issue" color="secondary" round>Undo</Button>
                    </div>
                  </Row>
            </Card>
          </Col>

          <Col xs={10}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Students who were reported</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead className=" text-primary">
                  <th>
                    Reported Student's Email
                  </th>
                  <th>
                    Student who made the claim
                  </th>
                  <th>
                    Student who made the claim's status
                  </th>
                  <th>
                    Reason
                  </th>
                  <th>
                    Violated code of conduct?
                  </th>
                  <th>
                    Reassign the student?
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                        example@kcl.ac.uk
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Mentee
                    </td>
                    <td>
                      Could not contact the student for the past month.
                    </td>
                    <td>
                      False
                    </td>
                    <td>
                      True
                    </td>
                  </tr>
                  <tr>
                    <td>
                        example@kcl.ac.uk
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Mentor
                    </td>
                    <td>
                      The student admitted to plagiarism 
                    </td>
                    <td>
                      True
                    </td>
                    <td>
                      True
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

export default StudentIssue;