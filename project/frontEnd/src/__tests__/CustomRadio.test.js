import renderer from 'react-test-renderer';
import CustomRadio from '../components/CustomRadio/CustomRadio';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<CustomRadio />', function(){

    it('renders correctly', function(){
        const component = renderer.create(<CustomRadio />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
