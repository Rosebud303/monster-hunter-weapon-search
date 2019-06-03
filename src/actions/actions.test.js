import * as actions from './index';

describe('Actions', () => {
  it('should set an array of weapons inside of store', () => {
    const weapons = [{id:1, name:'battle-axe'}, {id:2, name:'great-sword'}]
    const expected = {
      type: 'SET_WEAPONS',
      weapons
    }
    const result = actions.setWeapons(weapons)
    expect(result).toEqual(expected)
  });

  it('should set the current category when type GET_CURRENT_CATRGORY is called', () => {
    const categoryTitle = 'Bob';
    const expected = {
      type: 'GET_CURRENT_CATEGORY',
      categoryTitle
    }
    const result = actions.getCurrentCategory(categoryTitle);
    expect(result).toEqual(expected)
  });

  it('should set categories in state when getCategoryTitles is called', () => {
    const categories = ['bob', 'bob2']
    const expected = {
      type: 'GET_CATEGORY_TITLES',
      categories
    }
    const result = actions.getCategoryTitles(categories);
    expect(result).toEqual(expected)
  });

  it('should set isLoading to the boolean passed in', () => {
    const boolean = true;
    const expected = {
      type: 'IS_LOADING',
      isLoading: boolean
    }
    const result = actions.isLoading(boolean);
    expect(result).toEqual(expected)
  });
})
