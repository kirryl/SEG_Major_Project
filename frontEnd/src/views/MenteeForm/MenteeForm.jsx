import React from "react";

import {
  FormGroup,
  Label,
  Input
} from "reactstrap";

import Button from "components/CustomButton/CustomButton.jsx";

const MenteeForm = () => {
  return (
    <>
    <br></br><br></br><br></br><br></br>
      <form>
        <div className="form-row">
          <FormGroup className="col-md-4">
            <Label for="interest1">Interest1</Label>
            <Input type="text"  id="interest 1" placeholder="eg. Games"/>
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="interest2">Interest2</Label>
            <Input type="text"  id="interest 2" placeholder="eg. Sports"/>
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="interest3">Interest3</Label>
            <Input type="text"  id="interest 3" placeholder="eg. TV"/>
          </FormGroup>
        </div>

      {/*year of study*/}
      <FormGroup className="col-md-4">
        <Label for="inputState">Year of Study</Label>
        <Input type="select" name="select" id="inputState" >
          <option>Choose...</option>
          <option>1st</option>
          <option>2nd/3rd/4th</option>
        </Input>
      </FormGroup>

      {/*gender*/}
      <FormGroup className="col-md-4">
        <Label for="inputState">Gender</Label>
        <Input type="select" name="select" id="inputState" >
          <option>Choose...</option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
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
    </FormGroup>

        <Button type="submit" color="primary">Submit</Button>
      </form>
    </>
  );
};

export default MenteeForm;
