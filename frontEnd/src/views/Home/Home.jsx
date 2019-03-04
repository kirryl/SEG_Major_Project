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
              <h1 className="title">King's College London Student Buddy System</h1>
              </CardBody>

              <Row>
              <Col md={12} xs={12}>
              <Card>
              {/*waiting for logo?*/}
              <CardImg top width="100%" src="" />
              </Card>
              </Col>

              <Col md={7} xs={12}>
              <Card>
                <CardBody>
                    <CardTitle>Welcome</CardTitle>
                    <CardText>The student buddy scheme is an informal support scheme to help students in the department network across all different years.

                    It has been designed for the use of King's College London students.</CardText>
                    <Button color="primary">Learn More</Button>
                </CardBody>
                </Card>
                </Col>
      {/*<Col md={8} xs={12}>
        <Card className="text-center">
          <CardBody>
          <h1>Welcome</h1>
            <p className="description text-center">
            The student buddy scheme is an informal support scheme to help students in the department network across all different years.
            <br></br>
            It has been designed for the use of King's College London students.</p>
          </CardBody>
        </Card>
      </Col>*/}

      <Col md={5} xs={12}>
        <Card className="text-center">
          <CardBody>
          {/*<h1>Sign in if you are already registered</h1>

          <Button color="primary">Sign In</Button>*/}
          <h1>Register below to join</h1>
          <form>
          <Row>
      <Col>
      <FormGroup>
        <Label for="firstName">First Name</Label>
        <Input type="text" placeholder="First name" />
      </FormGroup>
      </Col>
      <Col>
      <FormGroup>
        <Label for="lastName">Last Name</Label>
        <Input type="text" placeholder="Last name" />
      </FormGroup>
      </Col>
    </Row>

            <FormGroup>
              <Label for="inputAddress">Email Address</Label>
              <Input type="text"  id="inputAddress" placeholder="user@kcl.ac.uk"/>
            </FormGroup>
            {/*button does nothing currently*/}
            <Button type="submit" color="primary">Sign Up</Button>
          </form>
          </CardBody>
        </Card>
      </Col>
</Row>
      </div>

    )
  };
}


export default Home;
