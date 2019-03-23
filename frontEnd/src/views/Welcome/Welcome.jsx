import React from "react";
import {
  Card,
  CardBody,
  Row,
  CardImg,
  Col
} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import landing from "assets/img/landing.jpg";
import logo from "assets/img/kcl-logo.png";

class Welcome extends React.Component {
  render() {
    return (
      <div className="content">
          <Row>
          <a href="https://keats.kcl.ac.uk/my/"><img src={logo} alt="KCL Logo" width="160" height="122" style={{ float:`right` }}></img></a>
          <Col md={9}>
          <blockquote className="blockquote">
          <p className="mb-0">
            The student buddy scheme is an informal support scheme to help students in the department network across all different years.
            It has been designed for the use of King's College London students.
            <br></br>
            -For non-KCL student / student who has yet have a KCL email please sign-up through freshers button-
          </p>
          </blockquote>
        </Col>
        </Row>
        <Row>
        <Col md={10}>
        <Card style={{width: '62rem'}}>
            <CardImg top src={landing} alt="..." />
        </Card>
        </Col>
        </Row>
        <Row>
        <CardBody>
        <h4 className="title">Get Started</h4>
        </CardBody>
        </Row>
        <Row>
        <Col md={4}>
          <Card className="text-center">
            <CardBody>
            <h4>Current Student</h4>
            <Button href="./RegisterForm" color="primary">Sign-up</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
        <Card className="text-center">
            <CardBody>
            <h4>Prospective Student</h4>
            <Button color="primary">Sign-up</Button>
            </CardBody>
          </Card>
        </Col>
        </Row>
        <Row>
        <CardBody>
        <h4 className="title">
        Want to know more? - Read our FAQs!
        </h4>
        </CardBody>
        </Row>
          {/*individual cards for each faq*/}
            <Col md={8}>
            <Card className="text-left">
              <CardBody>
              <h6>What am I allowed to talk about?</h6>
                <p className="description text-left">
                You don't have to only talk about school work, 
                talk about your hobbies, find out what you have in common
                and maybe even meet for lunch!
                </p>
              </CardBody>
            </Card>
            </Col>
            <Col md={8}>
            <Card className="text-left">
              <CardBody>
              <h6>How long does the buddy system last?</h6>
                <p className="description text-left">
                The buddy system lasts for one academic year,
                for the next academic year, if you are a second or third year student
                you are eligible to apply to be a mentor.
                </p>
              </CardBody>
            </Card>
            </Col> 
            <Col md={8}>
            <Card className="text-left">
              <CardBody>
              <h6>Can my friends from other department join?</h6>
                <p className="description text-left">
                Currently this system is only for department of informatics student only
                </p>
              </CardBody>
            </Card>
            </Col>                        
            <Col md={8}>
            <Card className="text-left">
              <CardBody>
              <h6>Me and my buddy cannot get along at all, What should I do?</h6>
                <p className="description text-left">
                If you feel like you and your buddy cannot work out
                please submit the report form to either be assigned a new buddy
                or opt out of the buddy scheme
                </p>
              </CardBody>
            </Card>
            </Col>
            <Col md={8}>
            <Card className="text-left">
              <CardBody>
              <h6>In what case can I report my buddy?</h6>
                <p className="description text-left">
                You can report your buddy if they has not been responding to you
                or if you feel like your work is not up to par.
                If you believe that your buddy has committed a misconduct please include it in your report form
                </p>
              </CardBody>
            </Card>
            </Col>
            <Col md={8}>
            <Card className="text-left">
              <CardBody>
              <h6>I want to report my buddy</h6>
                <p className="description text-left">
                If you would like to report your buddy,
                please head to 'my buddy' page and follow the instructions.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={8}>
              <p>If you have any further questions please email us at <a href="mailto:ug-informatics@kcl.ac.uk">ug-informatics@kcl.ac.uk</a></p>
          </Col>
      </div>

    )
  };
}
export default Welcome;
