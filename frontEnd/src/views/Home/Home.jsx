import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

class Home extends React.Component {
  render() {
    return (
      <div className="content">

              <CardBody>
              <h2 className="title">King's College London Student Buddy System</h2>
              </CardBody>

              <Row>

              <Col md={9} xs={12}>
              <Card className="text-center">
                <CardBody>
                    <CardTitle>Welcome</CardTitle>
                    <CardText>The student buddy scheme is an informal support scheme to help students in the department network across all different years.

                    It has been designed for the use of King's College London students.</CardText>
                    {/* Add link to FAQ page */}
                    <a href="#link" class="btn btn-info" role="button">Learn More</a>
                </CardBody>
                </Card>
                </Col>
                </Row>
                <Row>

      <Col md={3} xs={5}>
        <Card className="text-center">
          <CardBody>
          <h4>First time user</h4>
          <Button color="primary">Sign-up</Button>
          </CardBody>
        </Card>
      </Col>
      <Col md={3} xs={5}>
        <Card className="text-center">
          <CardBody>
          <h4>Login</h4>
          <Button color="primary">Login</Button>
          </CardBody>
        </Card>
      </Col>
      <Col md={3} xs={5}>
      <Card className="text-center">
          <CardBody>
          <h4>Freshers</h4>
          <Button color="primary">Sign-up</Button>
          </CardBody>
        </Card>
      </Col>
  </Row>
      </div>

    )
  };
}


export default Home;
