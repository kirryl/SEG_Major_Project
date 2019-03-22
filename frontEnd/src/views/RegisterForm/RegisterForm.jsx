/*form for students to input their interests*/

import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col,
    FormGroup,
    Label,
    Input} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

class RegisterForm extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
        /*sets the column size for the card*/
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardBody>
                <form>
                <FormGroup>
                    /*user selects from dropdown list*/
                    <Label for="exampleSelect1">Interest 1</Label>
                    <Input type="select" name="select" id="exampleSelect1">
                    <option>Web Development</option>
                    <option>AI/Machine Learning</option>
                    <option>TV Show/Movie - Romance</option>
                    <option>TV Show/Movie - Independent</option>
                    <option>TV Show/Movie - Comedy</option>
                    <option>TV Show/Movie - Horror</option>
                    <option>TV Show/Movie - Sci-fi</option>
                    <option>TV Show/Movie - Others</option>
                    <option>Anime</option>
                    <option>Sports - Martial Arts</option>
                    <option>Sports - Football</option>
                    <option>Sports - Yoga</option>
                    <option>Sports - Others</option>
                    <option>Music</option>
                    <option>Theatre</option>
                    <option>Video Games</option>
                    <option>Travelling</option>
                    <option>Reading</option>
                    <option>Others</option>
                    </Input>
                    <Col>
                        <Input type="text" placeholder="others..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                /*user selects from dropdown list*/
                    <Label for="exampleSelect1">Interest 2</Label>
                    <Input type="select" name="select" id="exampleSelect1">
                    <option>Web Development</option>
                    <option>AI/Machine Learning</option>
                    <option>TV Show/Movie - Romance</option>
                    <option>TV Show/Movie - Independent</option>
                    <option>TV Show/Movie - Comedy</option>
                    <option>TV Show/Movie - Horror</option>
                    <option>TV Show/Movie - Sci-fi</option>
                    <option>TV Show/Movie - Others</option>
                    <option>Anime</option>
                    <option>Sports - Martial Arts</option>
                    <option>Sports - Football</option>
                    <option>Sports - Yoga</option>
                    <option>Sports - Others</option>
                    <option>Music</option>
                    <option>Theatre</option>
                    <option>Video Games</option>
                    <option>Travelling</option>
                    <option>Reading</option>
                    <option>Others</option>
                    </Input>
                    <Col>
                        <Input type="text" placeholder="others..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                /*user selects from dropdown list*/
                    <Label for="exampleSelect1">Interest 3</Label>
                    <Input type="select" name="select" id="exampleSelect1">
                    <option>Web Development</option>
                    <option>AI/Machine Learning</option>
                    <option>TV Show/Movie - Romance</option>
                    <option>TV Show/Movie - Independent</option>
                    <option>TV Show/Movie - Comedy</option>
                    <option>TV Show/Movie - Horror</option>
                    <option>TV Show/Movie - Sci-fi</option>
                    <option>TV Show/Movie - Others</option>
                    <option>Anime</option>
                    <option>Sports - Martial Arts</option>
                    <option>Sports - Football</option>
                    <option>Sports - Yoga</option>
                    <option>Sports - Others</option>
                    <option>Music</option>
                    <option>Theatre</option>
                    <option>Video Games</option>
                    <option>Travelling</option>
                    <option>Reading</option>
                    <option>Others</option>
                    </Input>
                    <Col>
                        <Input type="text" placeholder="others..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                /*user selects from dropdown list*/
                    <Label for="exampleSelect1">Interest 4</Label>
                    <Input type="select" name="select" id="exampleSelect1">
                    <option>Web Development</option>
                    <option>AI/Machine Learning</option>
                    <option>TV Show/Movie - Romance</option>
                    <option>TV Show/Movie - Independent</option>
                    <option>TV Show/Movie - Comedy</option>
                    <option>TV Show/Movie - Horror</option>
                    <option>TV Show/Movie - Sci-fi</option>
                    <option>TV Show/Movie - Others</option>
                    <option>Anime</option>
                    <option>Sports - Martial Arts</option>
                    <option>Sports - Football</option>
                    <option>Sports - Yoga</option>
                    <option>Sports - Others</option>
                    <option>Music</option>
                    <option>Theatre</option>
                    <option>Video Games</option>
                    <option>Travelling</option>
                    <option>Reading</option>
                    <option>Others</option>
                    </Input>
                    <Col>
                        <Input type="text" placeholder="others..." />
                    </Col>
                </FormGroup>
                <FormGroup>
                /*user selects from dropdown list*/
                    <Label for="exampleSelect1">Interest 5</Label>
                    <Input type="select" name="select" id="exampleSelect1">
                    <option>Web Development</option>
                    <option>AI/Machine Learning</option>
                    <option>TV Show/Movie - Romance</option>
                    <option>TV Show/Movie - Independent</option>
                    <option>TV Show/Movie - Comedy</option>
                    <option>TV Show/Movie - Horror</option>
                    <option>TV Show/Movie - Sci-fi</option>
                    <option>TV Show/Movie - Others</option>
                    <option>Anime</option>
                    <option>Sports - Martial Arts</option>
                    <option>Sports - Football</option>
                    <option>Sports - Yoga</option>
                    <option>Sports - Others</option>
                    <option>Music</option>
                    <option>Theatre</option>
                    <option>Video Games</option>
                    <option>Travelling</option>
                    <option>Reading</option>
                    <option>Others</option>
                    </Input>
                    <Col>
                        <Input type="text" placeholder="others..." />
                    </Col>
                </FormGroup>
                /*user selects their year of study from dropdown list*/
                <FormGroup className="col-md-4">
                    <Label for="inputState">Year of Study</Label>
                    <Input type="select" name="select" id="inputState" >
                    <option>Choose...</option>
                    <option>First</option>
                    <option>Second</option>
                    <option>Third</option>
                    <option>Fourth</option>
                    </Input>
                </FormGroup>

                  /*user selects their gender from dropdown list*/
                  <FormGroup className="col-md-4">
                    <Label for="inputState">Gender</Label>
                    <Input type="select" name="select" id="inputState" >
                    <option>Choose...</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                    </Input>
                </FormGroup>
                <FormGroup check
                
                <Label className="form-check-label">
                    <Input className="form-check-input" type="checkbox" value=""/>
                    Would you prefer a mentor of the same gender?
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

export default RegisterForm;
