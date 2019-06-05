import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../../actions';
import {App, mapDispatchToProps, mapStateToProps} from './App';

import getAllWeapons from '../../thunks/getAllWeapons';
jest.mock('../../thunks/getAllWeapons');


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

describe('App', () => {
  
  describe('Component', () => {
    let wrapper;
    let mockLoad;
    let mockGetWeps;
    let mockGetCats;

    beforeEach(() => {
      mockGetWeps = jest.fn();
      mockGetCats = jest.fn();
      mockLoad = false;
      wrapper = shallow (
        <App getAllWeapons={mockGetWeps}
             isLoading={mockLoad}
             getCategoryTitles={mockGetCats}
             weapons={mockWeps}/>
      )
    });

    it('should match snap shot', () => {
      expect(wrapper).toMatchSnapshot()
    });
    
  });
  
  describe('mapStateToProps', () => {
    it('should have isLoading in state', () => {
      const mockState = {
        weapons: mockWeps,
        isLoading: false,
        error:''
      }
      const expected = {
        weapons: mockWeps,
        isLoading: false
      }
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected)
    });
    
  });

  describe('mapDispatchToProps', () => {
    it('should call getAllWeapons with the correct params', () => {
      let mockUrl = 'www.MHW.com';
      let mockDispatch = jest.fn();
      let actionsToDispatch = getAllWeapons(mockUrl);
      let mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getAllWeapons(actionsToDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actionsToDispatch);
    });
  }); 
});
