/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx"
import { thead, tbody } from "variables/adminTable";

class CurrentStudents extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
        <Col md={10} xs={12}>
        <Card className="text-center">
          <CardBody>
          <h5>This is the...</h5>
            <p className="description text-center">
            </p>
          </CardBody>
        </Card>
        </Col>
        <Col xs={10}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">2020 Mentor-Mentee</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-left">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tbody.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.data.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <td key={key} className="text-middle">
                                  {prop}
                                </td>
                              );
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
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