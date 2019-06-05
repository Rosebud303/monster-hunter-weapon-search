import { combineReducers } from 'redux';
import * as reducers from './allReducer';

const rootReducer = combineReducers({
  weapons: reducers.weaponsReducer,
  isLoading: reducers.isLoadingReducer,
  categories: reducers.categoriesReducer,
  currentCategory: reducers.currentCategoryReducer,
  // currentWeapon: reducers.currentWeaponReducer
})

export default rootReducer;