import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader'


describe('', () => {
  let wrapper;  
  beforeEach(() => {
    wrapper = shallow (
      <Loader />
    )
  });

  it('should match snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});