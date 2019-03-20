import renderer from 'react-test-renderer';
import Header from '../components/Header/Header';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Header />', function(){

    it('renders correctly', function(){
        const component = renderer.create(<Header />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
