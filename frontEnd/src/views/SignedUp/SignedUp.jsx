import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Table,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

class SignedUp extends React.Component {
  render() {
    return (
        <div className="content">
        <Row>
        <Col md={10} xs={12}>
        <Card className="text-left">
          <CardBody>
          <h5>10 Days until end of registration</h5>
          </CardBody>
        </Card>
        </Col>
        <Col xs={14}>
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

        </div>
    )
  };
}


export default SignedUp;
