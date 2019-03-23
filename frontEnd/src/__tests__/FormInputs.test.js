import renderer from 'react-test-renderer';
import FormInputs from '../components/FormInputs/FormInputs';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<FormInputs />', function(){

    it('renders correctly', function(){
        const component = renderer.create(<FormInputs />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
