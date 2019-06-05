import * as reducers from './allReducer';
import * as actions from '../actions'

describe('allReducers', () => {
  it('should have default state for weapons', () => {
    const expected = []
    const result = reducers.weaponsReducer(undefined, [])
    expect(result).toEqual(expected)
  });

  it('should have default state for categories', () => {
    const expected = []
    const result = reducers.categoriesReducer(undefined, [])
    expect(result).toEqual(expected)
  });

  it('should have default state for currentCategory', () => {
    const expected = ''
    const result = reducers.currentCategoryReducer(undefined, [])
    expect(result).toEqual(expected)
  });

  it('should have default state for isLoading', () => {
    const expected = false
    const result = reducers.isLoadingReducer(undefined, [])
    expect(result).toEqual(expected)
  });

  it('should set categories in store', () => {
    const mockCategories = ['sword', 'axe']
    const action = actions.getCategoryTitles(mockCategories);
    const expected = mockCategories;
    const result = reducers.categoriesReducer([], action)
    expect(result).toEqual(expected)
  });

  it('should set currentCategory in store', () => {
    const mockCategory = 'sword'
    const action = actions.getCurrentCategory(mockCategory);
    const expected = mockCategory;
    const result = reducers.currentCategoryReducer('', action)
    expect(result).toEqual(expected)
  });

  it('should set isLoading in store', () => {
    const mockLoad = false
    const action = actions.isLoading(mockLoad);
    const expected = mockLoad;
    const result = reducers.isLoadingReducer(false, action)
    expect(result).toEqual(expected)
  });
});
