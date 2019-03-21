/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

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
                    Interests
                  </th>
                  <th>
                    Proof
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
                      
                    </td>
                    <td>
                      Yes
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
                      
                    </td>
                    <td>
                      No
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
                      
                    </td>
                    <td>
                      Yes
                    </td>
                  </tr>
                </tbody>
              </Table>
              </CardBody>
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