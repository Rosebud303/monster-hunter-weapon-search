import React from 'react';
import { shallow } from 'enzyme';
import Weapon from './Weapon'


describe('Weapon', () => {
  let wrapper; 
  let mockId = 1
  let mockPicture = 'picture.png'
  let mockName = 'Sword'
  beforeEach(() => {
    wrapper = shallow (
      <Weapon id={mockId}
              name={mockName}
              picture={mockPicture}/>
    )
  });

  it('should match snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});