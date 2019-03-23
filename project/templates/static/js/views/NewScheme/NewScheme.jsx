/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Label, Input, Table } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx"
import { thead, tbody } from "variables/adminTable";

class NewScheme extends React.Component {
  render() {
    return (
    <div className="content">
      <Row>
        <Col md={10} xs={12}>
        <Card className="text-center">
          <CardBody>
          <h5>To create a new scheme:</h5>
            <p className="description text-center">
            ....
            </p>
          </CardBody>
        </Card>
        </Col>
    </Row>
    <Row>
          <Col md={10} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Start a new scheme</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <FormInputs
                    ncols={["col-md-7 pr-1"]}
                    proprieties={[
                      {
                        label: "Name of the scheme",
                        inputProps: {
                          type: "text",
                          defaultValue: "2021 Informatics Buddy Scheme"
                        }
                      },
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-5 pr-1", "col-md-5 pr-1"]}
                    proprieties={[
                      {
                        label: "Sign up start date",
                        inputProps: {
                          type: "date"
                        }
                      },
                      {
                        label: "Sign up end date",
                        inputProps: {
                          type: "date"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-5 pr-1", "col-md-5 pr-1"]}
                    proprieties={[
                      {
                        label: "Scheme start date",
                        inputProps: {
                          type: "date"
                        }
                      },
                      {
                        label: "Scheme end date",
                        inputProps: {
                          type: "date"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                  ncols = {["col-md-5 pr-1" , "col-md-5 pr-1" ]}
                  proprieties = {[
                      {
                          label : "Admin 1",
                          inputProps : {
                              type : "email",
                              defaultValue: "example@kcl.ac.uk"
                          }
                      },
                      {
                          label : "Admin 2",
                          inputProps : {
                              type : "email",
                              placeholder: "example@kcl.ac.uk"
                          }
                      }
                  ]}
                  />
                  <FormInputs
                    ncols={["col-md-3 pr-1"]}
                    proprieties={[
                      {
                        label: "Number of mentee per mentor",
                        inputProps: {
                          type: "int",
                          defaultValue: "2"
                        }
                      },
                    ]}
                  />                                                                          
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
export default NewScheme;