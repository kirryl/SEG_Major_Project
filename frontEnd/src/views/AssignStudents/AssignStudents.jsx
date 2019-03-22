/* Admins only, purpose is to view students who are currently unpaired and 
    to manually pair them with a mentor /*

/*eslint-disable*/
import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table } from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx"
import { thead, tbody } from "variables/adminTable";

class AssignStudents extends React.Component {
  render() {
    return (
      <div className="content">
      <Row>
      /*sets the column size for card*/
        <Col md={10} xs={12}>
        /*centers the text cointained in the card*/
        <Card className="text-center">
          <CardBody>
          <h5>Assigning students</h5>
            <p className="description text-center">
            ...</p>
          </CardBody>
        </Card>
        </Col>
        /*sets the column size for card*/
        <Col md={10} xs={10}>
          <Card className="card-user">
          /*section where admins are able to manually assign mentors with mentees by manually inputting mentor and mentee emails*/
            <CardHeader>
              <CardTitle>Manually Assign Mentor with Mentee</CardTitle>
            </CardHeader>
            <CardBody>
              <form>
              <FormInputs
              ncols = {["col-md-5 pr-1" , "col-md-5 pr-1" ]}
              proprieties = {[
                  {
                    /*admin manually inputs mentor email to be assigned with mentee*/
                      label : "Mentor Email Address",
                      inputProps : {
                        /*example email that is seen by user*/
                          type : "email",
                          defaultValue: "example@kcl.ac.uk"
                      }
                  },
                  {
                    /*admin manually inputs mentee email to be assigned with mentor*/
                      label : "Mentee Email Address",
                      inputProps : {
                          type : "email",
                          /*example email that is seen by user*/
                          placeholder: "example@kcl.ac.uk"
                      }
                  }
              ]}
          />
                <Row>
                /*Update button to assign mentor with mentee*/
                  <div className="update ml-auto mr-auto">
                    <Button color="primary" round>Update </Button>
                  </div>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
        /*sets the column size for card
        <Col xs={10}>
        /*a list of students who are yet to be assigned*/
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Students to be assigned</CardTitle>
              </CardHeader>
              <CardBody>
              <Table responsive>
                <thead className=" text-primary">
                /*defines name header cell*/
                  <th>
                    Name
                  </th>
                  /*defines email header cell*/
                  <th>
                    Email
                  </th>
                  /*defines status header cell*/
                  <th>
                    Status
                  </th>
                  /*defines interests header cell*/
                  <th className="text-right">
                    Interests
                  </th>
                </thead>
                <tbody>
                /*rows in table*/
                  <tr>
                    <td>
                      Dakota Rice
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
    </div>
  );
}
}

export default AssignStudents;
