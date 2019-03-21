/*eslint-disable*/
import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";
// react plugin for creating myBuddy over the dashboard
import NotificationAlert from "react-notification-alert";

//import Button from "components/CustomButton/CustomButton.jsx";

class FAQ extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  render() {
    return (
      <div className="content">
        <NotificationAlert ref="notificationAlert" />
        <CardBody>
              <h4 className="title">Frequently Asked Questions - Got a question? Check out our FAQs below.</h4>
        </CardBody>
        <Row>
          <Col md={12}>
          {/*individual cards for each faq*/}
            <Card>
            </Card>
            <Col md={10} xs={12}>
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
            <Col md={10} xs={12}>
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
            <Col md={10} xs={12}>
            <Card className="text-left">
              <CardBody>
              <h6>Can my friends from other department join?</h6>
                <p className="description text-left">
                Currently this system is only for department of informatics student only
                </p>
              </CardBody>
            </Card>
            </Col>                        
            <Col md={10} xs={12}>
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
            <Col md={10} xs={12}>
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
            <Col md={10} xs={12}>
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
          </Col>
        </Row>

      </div>
    );
  }
}
export default FAQ;
