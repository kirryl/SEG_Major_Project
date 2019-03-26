import React from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col,
    FormGroup,
    Label,
    Input} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Select from "react-select";

    const yearOfStudy = [
      {label: "First", value: 1},
      {label: "Second", value: 2},
      {label: "Third", value: 3},
      {label: "Fourth", value: 4},
      {label: "Fresher", value: 5},
    ];

    const gender = [
      {label: "Female", value: 1},
      {label: "Male", value: 2},
      {label: "Prefer not to say", value: 3},
    ];

    const interests = [
      {label: "Athletics", value: 1},
      {label: "Chess", value: 2},
      {label: "Boxing", value: 3},
      {label: "Martial arts", value: 4},
      {label: "Ice Hockey", value: 5},
      {label: "Rock Climbing", value: 6},
      {label: "Ice skating", value: 7},
      {label: "Hockey", value: 8},
      {label: "Football", value: 9},
      {label: "Rugby", value: 10},
      {label: "Tennis", value: 11},
      {label: "Cricket", value: 12},
      {label: "Baseball", value: 13},
      {label: "Table tennis", value: 14},
      {label: "Acrobatics", value: 15},
      {label: "Jazz", value: 16},
      {label: "Pop", value: 17},
      {label: "Techno", value: 18},
      {label: "Indie", value: 19},
      {label: "Sci-fi", value: 20},
      {label: "Pottery", value: 21},
      {label: "Sowing", value: 22},
      {label: "Baking", value: 23},
      {label: "Cooking", value: 24},
      {label: "Yoga", value: 25},
      {label: "Books", value: 26},
      {label: "Rock", value: 27},
      {label: "Trainspotting", value: 28},
      {label: "PC gaming", value: 29},
      {label: "Strategy", value: 30},
      {label: "Bowling", value: 31},
      {label: "Golf", value: 32},
      {label: "Pool", value: 33},
      {label: "Go", value: 34},
      {label: "Card games", value: 35},
      {label: "Toguz korgool", value: 36},
      {label: "Pokemon", value: 37},
      {label: "Console gaming", value: 38},
      {label: "Photography", value: 39},
      {label: "Fine art", value: 40},
      {label: "Graphics", value: 41},
      {label: "Dance", value: 42},
      {label: "Filmography", value: 43},
      {label: "Design", value: 44},
      {label: "Fashion", value: 45},
      {label: "Graphics", value: 46},
      {label: "Dance", value: 47},
      {label: "Filmography", value: 48},
      {label: "Design", value: 49},
      {label: "Fashion", value: 50},
      {label: "Architecture", value: 51},
      {label: "AI", value: 52},
      {label: "Security", value: 53},
      {label: "Software engineering", value: 54},
      {label: "Electronic engineering", value: 55},
      {label: "Fintech", value: 56},
      {label: "Virtual reality", value: 57},
      {label: "Marketing", value: 58},
      {label: "Quantum computing", value: 59},
      {label: "Digital transformation", value: 60},
      {label: "Web development", value: 61},
      {label: "Telecommunications", value: 62},
      {label: "German", value: 63},
      {label: "Korean", value: 64},
      {label: "Lahnda", value: 65},
      {label: "Javanese", value: 66},
      {label: "Bengali", value: 67},
      {label: "Arabic", value: 68},
      {label: "Spanish", value: 69},
      {label: "Portugese", value: 70},
      {label: "Hindi", value: 71},
      {label: "Economics", value: 72},
      {label: "Philosophy", value: 73},
      {label: "Psycology", value: 74},
      {label: "Literature", value: 75},
      {label: "History", value: 76},
      {label: "Law", value: 77},
      {label: "Geography", value: 78},
      {label: "Medicine", value: 79},
      {label: "Biological sciences", value: 80},
      {label: "Chemistry", value: 81},
      {label: "Physics", value: 82},
      {label: "Mathematics", value: 83},
      {label: "Gender equality", value: 84},
      {label: "LGBTQ+", value: 85},
      {label: "Memes", value: 86},
      {label: "Cats", value: 87},
      {label: "Dogs", value: 88},
      {label: "Investment", value: 89},
      {label: "Travel", value: 90},
      {label: "Environmental protection", value: 91},
      {label: "Political debate", value: 92},
    ];

/*form for students to input their interests*/
class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      yearOfStudy: 'First',
      gender: 'Male',
      interest1: 'Athletics',
      interest2: 'Pokemon',
      interest3: 'AI',
      interest4: 'Investment',
      interest5: 'Travel',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked: target.value;
    const yearOfStudy = target.name;
  }

  handleSubmit(event){
    event.preventDefault();
  }

    render(){
      return(
        <div className = "content">
        <Row>
          <Col md={8} xs={12}>
            <Card className="card-user">
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardBody>
              <form onSubmit = {this.handleSubmit}>
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
                <Label>
                Year of Study
                </Label>
                <Select options = {yearOfStudy}/>

                {/*gender*/}
                <Label>
                Gender
                </Label>
                <Select options = {gender}/>

                <Label>
                Would you prefer a mentor of the same gender?
                <input
                  name = "sameGender"
                  type = "checkbox"
                  checked = {this.state.sameGender}
                  onChange = {this.handleInputChange}/>
                </Label>

                <br></br>

                {/*interest1*/}
                <Label>
                Interest 1
                </Label>
                <Select options = {interests}/>

                {/*interest2*/}
                <Label>
                Interest 2
                </Label>
                <Select options = {interests}/>

                {/*interest3*/}
                <Label>
                Interest 3
                </Label>
                <Select options = {interests}/>

                {/*interest4*/}
                <Label>
                Interest 4
                </Label>
                <Select options = {interests}/>

                {/*interest5*/}
                <Label>
                Interest 5
                </Label>
                <Select options = {interests}/>

                {/*special consideration*/}
                <Label>
                Is there any reason you believe that you should receive special consideration?
                  <input type = "text" value = {this.state.value} onChange = {this.handleChange}/>
                </Label>

                  <Row>
                    <div className="update ml-auto mr-auto">
                    <Button color = "primary" round><input type = "submit" value = "Submit"/></Button>
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
