import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../../actions';
import {App, mapDispatchToProps, mapStateToProps} from './App';

import getAllWeapons from '../../thunks/getAllWeapons';
jest.mock('../../thunks/getAllWeapons');

describe('App', () => {
  
  describe('Component', () => {
    
  });
  
  describe('mapStateToProps', () => {
    
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
