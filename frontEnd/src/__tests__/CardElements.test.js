import renderer from 'react-test-renderer';
import CardAuthor from '../components/CardElements/CardAuthor';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import enzymeConfig from '../../enzymeConfig'


describe('<CardAuthor />', function(){
  let props;
  let mountedCardAuthor;

  beforeEach(() => {
    props = {
      link: undefined,
      avatar: undefined,
      avatarAlt: undefined,
      title: undefined,
      description: undefined,
    };
    mountedCardAuthor = undefined;
  });

    it('renders correctly', function(){
        const component = renderer.create(<CardAuthor />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CardAuthor />, div);
    });
})
