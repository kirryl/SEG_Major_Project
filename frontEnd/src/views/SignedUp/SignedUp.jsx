/*admin and superadmin only - countdown till the end of registration,
  view all mentors*/

import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Table,
  Row,
  Col
} from "reactstrap";

class SignedUp extends React.Component {
  render() {
    return (
        <div className="content">
        <Row>
        /*sets the column size for the card*/
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
                /*defines email header cell*/
                  <th>
                    Email
                  </th>
                  /*defines first name header cell*/
                  <th>
                    First Name
                  </th>
                  /*defines preferred name header cell*/
                  <th>
                    Preferred Name
                  </th>
                  /*defines last name header cell*/
                  <th>
                    Last Name
                  </th>
                  /*defines interest1 header cell*/
                  <th>
                    Interest 1
                  </th>
                  /*defines interest2 header cell*/
                  <th>
                    Interest 2
                  </th>
                  /*defines interest3 header cell*/
                  <th>
                    Interest 3
                  </th>
                  /*defines interest4 header cell*/
                  <th>
                    Interest 4
                  </th>
                  /*defines interest 5 header cell*/
                  <th>
                    Interest 5
                  </th>
                  /*defines year header cell*/
                  <th>
                    Year
                  </th>
                  /*defines gender header cell*/
                  <th>
                    Gender
                  </th>
                  /*defines gender preference header cell (boolean)*/
                  <th>
                    Prefer same gender?
                  </th>
                </thead>
                <tbody>
                  <tr>
                  /*rows in table*/
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
