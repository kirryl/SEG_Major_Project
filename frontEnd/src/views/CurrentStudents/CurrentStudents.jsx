/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

class CurrentStudents extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
        <Col xs={10}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">2020 Mentor-Mentee</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead className=" text-primary">
                  <th>
                    Mentor Email
                  </th>
                  <th>
                    Mentee Email
                  </th>
                  <th>
                    Compatibility
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
                      78%
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
                      75%
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
                      82%
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
                      78%
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
                      88%
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

export default CurrentStudents;