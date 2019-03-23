import renderer from 'react-test-renderer';
import FixedPlugin from '../components/FixedPlugin/FixedPlugin';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<FixedPlugin />', function(){

    it('renders correctly', function(){
        const component = renderer.create(<FixedPlugin />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
