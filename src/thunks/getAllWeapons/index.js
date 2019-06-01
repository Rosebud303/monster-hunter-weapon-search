import { setWeapons, isLoading } from '../../actions';
import fetchAll from '../fetches/fetchAll';

const getAllWeapons = (url) => {
  return async (dispatch) => {
    try{
      dispatch(isLoading(true))
      const weapons = await fetchAll(url)
      console.log(weapons)
      dispatch(isLoading(false))
      dispatch(setWeapons(weapons))
    } catch (error) {
      //dispatch(hasErrored(error.message))
    }
  }
}

export default getAllWeapons;