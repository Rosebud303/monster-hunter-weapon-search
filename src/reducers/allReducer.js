export const weaponsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_WEAPONS':
      return action.weapons.map( weapon => {
        if(weapon.assets !== null) {
          const image = weapon.assets.image
          return {
            id: weapon.id,
            type: weapon.type,
            name: weapon.name,
            minDMG: weapon.attack.raw,
            maxDMG: weapon.attack.display, 
            rarity: weapon.rarity,
            damageType: weapon.damageType,
            craftable: weapon.crafting.craftable,
            picture: image
          }
        } else if (weapon.assets === null) {
          return {
            id: weapon.id,
            type: weapon.type,
            name: weapon.name,
            minDMG: weapon.attack.raw,
            maxDMG: weapon.attack.display, 
            rarity: weapon.rarity,
            damageType: weapon.damageType,
            craftable: weapon.crafting.craftable,
            picture: 'No Image'
          }

        }
      })
    default:
      return state
  }
}

export const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CATEGORY_TITLES':
      return action.categories
    default:
      return state
  }
}

export const currentCategoryReducer = (state = '', action) => {
  switch (action.type) {
    case 'GET_CURRENT_CATEGORY':
      return action.categoryTitle
    default:
      return state
  }
}

export const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return action.isLoading
    default:
      return state
  }
}