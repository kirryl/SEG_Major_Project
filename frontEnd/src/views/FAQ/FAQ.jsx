/*eslint-disable*/
import React from "react";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
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
        <Row>
          <Col md={12}>
          {/*individual cards for each faq*/}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <p className="card-category">
                Got a question? Check out our FAQs below.
                </p>
              </CardHeader>
            </Card>
            <Card>
            <CardTitle>Blah blah</CardTitle>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}


export default FAQ;
