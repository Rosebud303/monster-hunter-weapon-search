export const weaponsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_WEAPONS':
      return action.weapons.map( weapon => {
        return {
          id: weapon.id,
          name: weapon.name,
          minDMG: weapon.attack.raw,
          maxDMG: weapon.attack.display, 
          rarity: weapon.rarity,
          damageType: weapon.attributes.damageType,
          craftable: weapon.crafting.craftable,
          assests: weapon.assets
        }
      })
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