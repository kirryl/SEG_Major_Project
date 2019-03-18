import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from '../components/CustomButton/CustomButton';
import enzymeConfig from '../../enzymeConfig'
import { shallow } from 'enzyme';

describe('<CustomButton />', function () {

    it('renders correctly', function () {
        const component = renderer.create(<CustomButton />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });


})
