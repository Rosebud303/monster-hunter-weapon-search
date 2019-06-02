export const setWeapons = (weapons) => ({
  type: 'SET_WEAPONS',
  weapons
})

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  isLoading: boolean
})

export const getCategoryTitles = (categories) => ({
  type: 'GET_CATEGORY_TITLES',
  categories
})

export const getCurrentCategory = (categoryTitle) => ({
  type: 'GET_CURRENT_CATEGORY',
  categoryTitle
})