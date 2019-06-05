import React from 'react';
import { shallow } from 'enzyme';
import { WeaponContainer, mapStateToProps } from './WeaponContainer';

let mockWeps = [{
  craftable: true,
  damageType: "sever",
  id: 1,
  maxDMG: 384,
  minDMG: 80,
  name: "Buster Sword 1",
  picture: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png",
  rarity: 1,
  type: "great-sword",
}, {
  craftable: true,
  damageType: "sever",
  id: 2,
  maxDMG: 384,
  minDMG: 80,
  name: "Buster Sword 2",
  picture: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png",
  rarity: 1,
  type: "great-sword",
}]

describe('WeaponContainer', () => {
  
  describe('Component', () => {
    let wrapper;  

    beforeEach(() => {
      wrapper = shallow (
        <WeaponContainer weapons={mockWeps}/>
      )
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

  describe('mapStateToProps', () => {
    const mockState = {
      isLoading: false,
      weapons: mockWeps
    }
    const expected = {
      weapons: mockWeps
    }
    const result = mapStateToProps(mockState)
    expect(result).toEqual(expected)
  })
  
});