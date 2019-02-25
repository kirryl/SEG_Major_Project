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

class myBuddy extends React.Component {
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
            <Card>
              <CardHeader>
                <CardTitle>Hello (name goes here),</CardTitle>
                <p className="card-category">
                your buddy is ...
                </p>
              </CardHeader>

            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}


export default myBuddy;
