import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/damir-bosnjak.jpg";
import mike from "assets/img/mike.jpg";

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md={4} xs={12}>
            <Card className="card-user">
              <div className="image">
                <img src={damirBosnjak} alt="..." />
              </div>
              <CardBody>
                <CardAuthor
                  avatar={mike}
                  avatarAlt="..."
                  title="John (Johnny) Doe"
                  description="k1763918@kcl.ac.uk"
                />
                <p className="description text-center">
                  Nice to meet you!
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                  <FormInputs
                    ncols={["col-md-5 pr-1"]}
                    proprieties={[
                      {
                        label: "Email Address",
                        inputProps: {
                          type: "email",
                          disabled: true,
                          defaultValue: "k1763918@kcl.ac.uk"
                        }
                      },
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-4 pr-1", "col-md-4 pr-1", "col-md-4 pl-1"]}
                    proprieties={[
                      {
                        label: "First Name",
                        inputProps: {
                          type: "text",
                          disabled: true,
                          placeholder: "First Name",
                          defaultValue: "John"
                        }
                      },
                      {
                        label: "Preferred Name",
                        inputProps: {
                          type: "text",
                          disabled: true,
                          placeholder: "Preferred Name",
                          defaultValue: "Johnny"
                        }
                      },
                      {
                        label: "Last Name",
                        inputProps: {
                          type: "text",
                          disabled: true,
                          placeholder: "Last Name",
                          defaultValue: "Doe"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "My degree",
                        inputProps: {
                          type: "Text",
                          defaultValue: "BSc Computer Science with a year abroad"
                        }
                      },
                    ]}
                  />                  
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "UK Address",
                        inputProps: {
                          type: "text",
                          placeholder: "Home Address",
                          defaultValue:
                            "Stratford One, London"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "Home Address",
                        inputProps: {
                          type: "text",
                          placeholder: "Home Address",
                          defaultValue:
                            "Melbourne, Australia"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "About Me",
                        inputProps: {
                          type: "textarea",
                          defaultValue:
                            "Nice to meet you!",
                          placeholder: "Here can be your description"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "My Current Modules",
                        inputProps: {
                          type: "textarea",
                          defaultValue:
                            "Software Engineering Group Project (SEG), Programming Language Paradigms (PLD), Introduction to Artificial Intelligence (INT), Operating System and Concurrency (OSC)",
                          placeholder: "Here can be your description"
                        }
                      }
                    ]}
                  />
                  <FormInputs
                    ncols={["col-md-12"]}
                    proprieties={[
                      {
                        label: "My Society",
                        inputProps: {
                          type: "textarea",
                          defaultValue:
                            "KCL Australian Society, KCL Rugby Society",
                          placeholder: "Here can be your description"
                        }
                      }
                    ]}
                  />                  
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button color="primary" round>Update Profile</Button>
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

export default User;
