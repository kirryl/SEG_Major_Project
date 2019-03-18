import renderer from 'react-test-renderer';
import Footer from '../components/Footer/Footer';
import React from 'react';
import { shallow } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Footer />', function(){

    it('renders correctly', function(){
        const component = renderer.create(<Footer />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
