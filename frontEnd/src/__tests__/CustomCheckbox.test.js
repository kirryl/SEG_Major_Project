import renderer from 'react-test-renderer';
import Checkbox from '../components/CustomCheckbox/SimpleCheckbox';
import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'

describe('<Checkbox />', function(){
  let props;
  let mountedCheckbox;

  beforeEach(() => {
    props = {
      simple: undefined,
      round: undefined,
      icon: undefined,
      title: undefined,
      description: undefined,
    };
    mountedCheckbox = undefined;
  });
    it('renders correctly', function(){
        const component = renderer.create(<Checkbox />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

//     it('Should capture checkbox ticked correctly onChange', function(){
//
// })
})
