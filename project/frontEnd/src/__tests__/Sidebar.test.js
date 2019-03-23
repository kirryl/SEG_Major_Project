import renderer from 'react-test-renderer';
import Sidebar from '../components/Sidebar/Sidebar';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Sidebar />', function(){

    it('renders correctly', function(){
        const component = renderer.create(<Sidebar />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
