import React from 'react';
import { shallow } from 'enzyme';
import CategoryTitle from './CategoryTitle'


describe('', () => {
  let wrapper;  
  beforeEach(() => {
    wrapper = shallow (
      <CategoryTitle />
    )
  });

  it('should match snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});