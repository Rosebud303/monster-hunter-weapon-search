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
})
