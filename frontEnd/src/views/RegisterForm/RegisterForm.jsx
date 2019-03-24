import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col,
    FormGroup,
    Label,
    Input} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Select from "components/Select/Select.jsx";

class RegisterForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      newUser: {
        prefName: ''
      },

      yearOfStudy: ['First','Second','Third','Fourth','Freshers'],
      gender: ['Female', 'Male', 'Prefer not to say'],
      interest1: ['Athletics','Chess','Boxing','Martial arts','Ice Hockey','Rock Climbing','Ice skating','Hockey','Football','Rugby','Tennis','Cricket','Baseball','Table tennis','Acrobatics','Jazz','Pop','Techno','Indie','Sci-fi','Pottery','Sowing','Baking','Cooking','Yoga','Books','Rock','Trainspotting','PC gaming','Strategy','Bowling','Golf','Pool','Go','Card games','Toguz korgool','Pokemon','Tabletop','Console gaming','Photography','Fine art','Graphics','Dance','Filmography','Design','Fashion','Architecture','AI','Security','Software engineering','Electronic engineering','Fintech','Virtual reality','Marketing','Quantum computing','Digital transformation','Web development','Telecommunications','German','Korean','Lahnda','Javanese','Bengali','Arabic','Spanish','Portugese','Hindi','Economics','Philosophy','Psycology','Literature','History','Law','Geography','Medicine','Biological sciences','Chemistry','Physics','Mathematics','Gender equality','LGBTQ+','Memes','Cats','Dogs','Investment','Travel','Environmental protection','Political debate'],
      interest2: ['Athletics','Chess','Boxing','Martial arts','Ice Hockey','Rock Climbing','Ice skating','Hockey','Football','Rugby','Tennis','Cricket','Baseball','Table tennis','Acrobatics','Jazz','Pop','Techno','Indie','Sci-fi','Pottery','Sowing','Baking','Cooking','Yoga','Books','Rock','Trainspotting','PC gaming','Strategy','Bowling','Golf','Pool','Go','Card games','Toguz korgool','Pokemon','Tabletop','Console gaming','Photography','Fine art','Graphics','Dance','Filmography','Design','Fashion','Architecture','AI','Security','Software engineering','Electronic engineering','Fintech','Virtual reality','Marketing','Quantum computing','Digital transformation','Web development','Telecommunications','German','Korean','Lahnda','Javanese','Bengali','Arabic','Spanish','Portugese','Hindi','Economics','Philosophy','Psycology','Literature','History','Law','Geography','Medicine','Biological sciences','Chemistry','Physics','Mathematics','Gender equality','LGBTQ+','Memes','Cats','Dogs','Investment','Travel','Environmental protection','Political debate'],
      interest3: ['Athletics','Chess','Boxing','Martial arts','Ice Hockey','Rock Climbing','Ice skating','Hockey','Football','Rugby','Tennis','Cricket','Baseball','Table tennis','Acrobatics','Jazz','Pop','Techno','Indie','Sci-fi','Pottery','Sowing','Baking','Cooking','Yoga','Books','Rock','Trainspotting','PC gaming','Strategy','Bowling','Golf','Pool','Go','Card games','Toguz korgool','Pokemon','Tabletop','Console gaming','Photography','Fine art','Graphics','Dance','Filmography','Design','Fashion','Architecture','AI','Security','Software engineering','Electronic engineering','Fintech','Virtual reality','Marketing','Quantum computing','Digital transformation','Web development','Telecommunications','German','Korean','Lahnda','Javanese','Bengali','Arabic','Spanish','Portugese','Hindi','Economics','Philosophy','Psycology','Literature','History','Law','Geography','Medicine','Biological sciences','Chemistry','Physics','Mathematics','Gender equality','LGBTQ+','Memes','Cats','Dogs','Investment','Travel','Environmental protection','Political debate'],
      interest4: ['Athletics','Chess','Boxing','Martial arts','Ice Hockey','Rock Climbing','Ice skating','Hockey','Football','Rugby','Tennis','Cricket','Baseball','Table tennis','Acrobatics','Jazz','Pop','Techno','Indie','Sci-fi','Pottery','Sowing','Baking','Cooking','Yoga','Books','Rock','Trainspotting','PC gaming','Strategy','Bowling','Golf','Pool','Go','Card games','Toguz korgool','Pokemon','Tabletop','Console gaming','Photography','Fine art','Graphics','Dance','Filmography','Design','Fashion','Architecture','AI','Security','Software engineering','Electronic engineering','Fintech','Virtual reality','Marketing','Quantum computing','Digital transformation','Web development','Telecommunications','German','Korean','Lahnda','Javanese','Bengali','Arabic','Spanish','Portugese','Hindi','Economics','Philosophy','Psycology','Literature','History','Law','Geography','Medicine','Biological sciences','Chemistry','Physics','Mathematics','Gender equality','LGBTQ+','Memes','Cats','Dogs','Investment','Travel','Environmental protection','Political debate'],
      interest5: ['Athletics','Chess','Boxing','Martial arts','Ice Hockey','Rock Climbing','Ice skating','Hockey','Football','Rugby','Tennis','Cricket','Baseball','Table tennis','Acrobatics','Jazz','Pop','Techno','Indie','Sci-fi','Pottery','Sowing','Baking','Cooking','Yoga','Books','Rock','Trainspotting','PC gaming','Strategy','Bowling','Golf','Pool','Go','Card games','Toguz korgool','Pokemon','Tabletop','Console gaming','Photography','Fine art','Graphics','Dance','Filmography','Design','Fashion','Architecture','AI','Security','Software engineering','Electronic engineering','Fintech','Virtual reality','Marketing','Quantum computing','Digital transformation','Web development','Telecommunications','German','Korean','Lahnda','Javanese','Bengali','Arabic','Spanish','Portugese','Hindi','Economics','Philosophy','Psycology','Literature','History','Law','Geography','Medicine','Biological sciences','Chemistry','Physics','Mathematics','Gender equality','LGBTQ+','Memes','Cats','Dogs','Investment','Travel','Environmental protection','Political debate']
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleFormSubmit(e) {
      e.preventDefault();
      let userData = this.state.newUser;

      fetch('  ',{
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(response => {
          response.json().then(data =>{
            console.log("Successful" + data);
          })
      })
    }

    handleClearForm(e) {

          e.preventDefault();
          this.setState({
            newUser: {
              prefName: '',
              yearOfStudy: [],
              gender: [],
              interest1: [],
              interest2: [],
              interest3: [],
              interest4: [],
              interest5: []
            },
          })
      }

/*form for students to input their interests*/

  render() {
    return (
      <div className="content">
        <Row>
        {/*sets the column size for the card*/}
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardBody>
                <form className = "container" onSubmit = {this.handleFormSubmit}>
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
                {/*year of study*/}

                {/*<FormGroup className="col-md-4">
                    <Label for="inputState">Year of Study</Label>
                    <Input type="select" name="select" id="inputState" >
                    <option>Choose...</option>
                    <option>First</option>
                    <option>Second</option>
                    <option>Third</option>
                    <option>Fourth</option>
                    <option>Freshers</option>
                    </Input>
                </FormGroup>*/}

                <Select yearOfStudy = {'Year of study'}
                    name = {'yearOfStudy'}
                    options = {this.state.yearOfStudyOptions}
                    value = {this.state.newUser.yearOfStudy}
                    placeholder = {'Select your year of study'}
                    handleChange = {this.handleInput}
                />

                {/*gender*/}
                                {/*}<FormGroup className="col-md-4">
                    <Label for="inputState">Gender</Label>
                    <Input type="select" name="select" id="inputState" >
                    <option>Choose...</option>
                    <option>Female</option>
                    <option>Male</option>
                    <option>Prefer not to say</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                <Label className="form-check-label">
                    <Input className="form-check-input" type="checkbox" value=""/>
                    Would you prefer a mentor of the same gender?
                    <span className="form-check-sign">
                    <span className="check"></span>
                    </span>
                </Label>
                </FormGroup>*/}
              <Select title={'Gender'}
                   name={'gender'}
                   options = {this.state.genderOptions}
                   value = {this.state.newUser.gender}
                   placeholder = {'Select Gender'}
                   handleChange = {this.handleInput}
              />

                <FormGroup>
                    {/*user selects from dropdown list*/}
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
                </FormGroup>
                <FormGroup>
                {/*user selects from dropdown list*/}
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
                </FormGroup>
                <FormGroup>
                {/*user selects from dropdown list*/}
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
                </FormGroup>
                <FormGroup>
                {/*user selects from dropdown list*/}
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
                </FormGroup>
                <FormGroup>
                {/*user selects from dropdown list*/}
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
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect1">Is there any reason you believe that you should receive special consideration?</Label>
                    <Col>
                        <Input type="text" placeholder=""/>
                    </Col>
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
