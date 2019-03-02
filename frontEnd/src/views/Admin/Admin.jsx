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

class Admin extends React.Component {
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
                <CardTitle>Administration</CardTitle>
                <p className="card-category">
                
                </p>
              </CardHeader>
            </Card>
            <Card>
            <CardTitle></CardTitle>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}


export default Admin;