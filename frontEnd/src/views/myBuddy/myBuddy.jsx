/*eslint-disable*/
import React from "react";
import { 
  Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Label, Input 
} from "reactstrap";
// react plugin for creating myBuddy over the dashboard
import NotificationAlert from "react-notification-alert";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

//import Button from "components/CustomButton/CustomButton.jsx";

class myBuddy extends React.Component {
  render() {
    return (
      <div className="content">
        <NotificationAlert ref="notificationAlert" />
        <Row>
          <Col md={10}>
            <Card>
              <CardHeader>
                <CardTitle>Hello Johnny!</CardTitle>
                <p className="card-category">
                your buddy is ...
                </p>
              </CardHeader>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={10} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Report My Buddy</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <FormInputs
                    ncols={["col-md-5 pr-1"]}
                    proprieties={[
                      {
                        label: "Your Buddy's Email Address",
                        inputProps: {
                          type: "email",
                          defaultValue: "example@kcl.ac.uk"
                        }
                      },
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "Reason",
                        inputProps: {
                          type: "textarea",
                          defaultValue:
                            "Please state your reason - if your buddy has violated the code of conduct please state the reason here and tick the box below",
                          placeholder: "Here can be your description"
                        }
                      }
                    ]}
                  />
                  <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Has your buddy violated the code of conduct?
                    <span className="form-check-sign">
                      <span className="check"></span>
                  </span>
                  </Label>
                  </FormGroup>
                  <FormGroup check>
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Do you want to be reassigned a new buddy?
                    <span className="form-check-sign">
                      <span className="check"></span>
                  </span>
                  </Label>
                  </FormGroup>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round>Submit</Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}


export default myBuddy;
