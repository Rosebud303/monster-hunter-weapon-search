import React from 'react';
import { shallow } from 'enzyme';
import WeaponDetails from './WeaponDetails'


describe('WeaponDetails', () => {
  let wrapper; 
  let mockId = 1
  let mockPicture = 'picture.png'
  let mockName = 'Sword'
  let mockType = 'small-sword'
  let mockMin = 80
  let mockMax = 200
  let mockDmgType = 'fire'
  let mockRare = 1
  let mockCraft = false
  beforeEach(() => {
    wrapper = shallow (
      <WeaponDetails id={mockId}
              name={mockName}
              picture={mockPicture}
              type={mockType}
              minDMG={mockMin}
              maxDMG={mockMax}
              damageType={mockDmgType}
              rarity={mockRare}
              craftable={mockCraft}/>
    )
  });

  it('should match snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  });

});