import { setWeapons, isLoading, getCategoryTitles } from '../../actions';
import fetchAll from '../fetches/fetchAll';

const getAllWeapons = (url) => {
  return async (dispatch) => {
    try{
      dispatch(isLoading(true))
      const weapons = await fetchAll(url)
      dispatch(isLoading(false))
      dispatch(setWeapons(weapons))
      const categories = weapons.reduce((acc, cur) => {
        if(!acc.includes(cur.type)){
          acc.push(cur.type)
        }
        return acc
      },[])
      dispatch(getCategoryTitles(categories))
    } catch (error) {
      //dispatch(hasErrored(error.message))
    }
  }
}

export default getAllWeapons;