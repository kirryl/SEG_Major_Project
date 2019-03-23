/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Label, Input, Table } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx"

class NewScheme extends React.Component {
  render() {
    return (
    <div className="content">
      <Row>
      /*sets the column size for card*/
        <Col md={10} xs={12}>
        /*centers the text contained in the card*/
        <Card className="text-left">
          <CardBody>
          <h5>10 Days until end of registration</h5>
          </CardBody>
        </Card>
        </Col>
        <Col xs={10}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Mentors who signed up</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead className=" text-primary">
                  <th>
                    Email
                  </th>
                  <th>
                    First Name
                  </th>
                  <th>
                    Preferred Name
                  </th>
                  <th>
                    Last Name
                  </th>
                  <th>
                    Interest 1
                  </th>
                  <th>
                    Interest 2
                  </th>
                  <th>
                    Interest 3
                  </th>
                  <th>
                    Interest 4
                  </th>
                  <th>
                    Interest 5
                  </th>
                  <th>
                    Year
                  </th>
                  <th>
                    Gender
                  </th>
                  <th>
                    Prefer same gender?
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      k1763918@kcl.ac.uk
                    </td>
                    <td>
                      Mananchaya
                    </td>
                    <td>
                      Mai
                    </td>
                    <td>
                      Khumtai
                    </td>
                    <td>
                      Cooking
                    </td>
                    <td>
                      Yoga
                    </td>
                    <td>
                      History
                    </td>
                    <td>
                      Japanese
                    </td>
                    <td>
                      Web development
                    </td>
                    <td>
                      Second
                    </td>
                    <td>
                      Female
                    </td>
                    <td>
                      No
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Minerva Hooper
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Mentor
                    </td>
                    <td className="text-right">

                    </td>
                  </tr>
                  <tr>
                    <td>
                      Sage Rodriguez
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Mentee
                    </td>
                    <td className="text-right">

                    </td>
                  </tr>
                  <tr>
                    <td>
                      Philip Chaney
                    </td>
                    <td>
                      example@kcl.ac.uk
                    </td>
                    <td>
                      Mentor
                    </td>
                    <td className="text-right">
                    </td>
                  </tr>
                </tbody>
              </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
    <Row>
      /*sets the column size for card*/
          <Col md={10} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Start a new scheme</CardTitle>
              </CardHeader>
              <CardBody>
              /*form to input the information to create a new scheme*/
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
