/* admin only- view students who have been reported and verify freshers who sign up with
    personal email address */

/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

class StudentIssue extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
      /*sets the column size for card*/
        <Col md={10} xs={12}>
        /*centers the text contained in the card*/
        <Card className="text-center">
          <CardBody>
          <h5>Students who need verification or check their report status </h5>
            <p className="description text-center">
            As an admin you are able to view all mentor-mentee pairings and manually assign students</p>
          </CardBody>
        </Card>
        </Col>
          <Col xs={10}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Students to be verified</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead className=" text-primary">
                /*defines name header cell*/
                  <th>
                    Name
                  </th>
                  /*defines email header cell */
                  <th>
                    Email
                  </th>
                  /*defines status header cell*/
                  <th>
                    Status
                  </th>
                  /*defines interests header cell*/
                  <th>
                    Interests
                  </th>
                  <th>
                  /*defines proof header cell*/
                    Proof
                  </th>
                </thead>
                <tbody>
                  <tr>
                  /*rows in table*/
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
          /* card below student verified */
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Students who were reported</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead className=" text-primary">
                /*defines reported students email header cell*/
                  <th>
                    Reported Student's Email
                  </th>
                  /*defines claims header cell*/
                  <th>
                    Student who made the claim
                  </th>
                  <th>
                  /*defines claim status header cell*/
                    Student who made the claim's status
                  </th>
                  /*defines the reason header cell*/
                  <th>
                    Reason
                  </th>
                  /*defines the violated code of conduct (boolean) header cell*/
                  <th>
                    Violated code of conduct?
                  </th>
                  /*defines the reassign students (boolean) header cell*/
                  <th>
                    Reassign the student?
                  </th>
                </thead>
                <tbody>
                  <tr>
                  /*rows in table*/
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
