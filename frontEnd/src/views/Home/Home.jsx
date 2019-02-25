import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={4} xs={12}>
            <Card className="text-center">
              <CardBody>
              <h1 className="title">King's College London Student Buddy System</h1>
              </CardBody>
            </Card>
          </Col>
      <Col md={8} xs={12}>
        <Card className="text-center">
          <CardBody>
          <h1>Welcome</h1>
            <p className="description text-center">
            The student buddy scheme is an informal support scheme to help students in the department network across all different years.
            <br></br>
            It has been designed for the use of King's College London students.</p>
          </CardBody>
        </Card>
      </Col>
      </Row>

      </div>

    )
  };
}


export default Home;
