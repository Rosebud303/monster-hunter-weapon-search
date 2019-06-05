import getAllWeapons from './index';
import * as actions from '../../actions';
import fetchAll from '../fetches/fetchAll'
jest.mock('../fetches/fetchAll')

describe('getAllWeapons', () => {
  let mockDispatch;
  let mockData;
  let mockUrl;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockData = []
    mockUrl = 'www.something.com'
  })

  it('should call fetchAll when called', async () => {
    fetchAll.mockImplementation(() => Promise.resolve({
      ok:true,
      json: () => Promise.resolve({
        mockData
      })
    }));
    const thunk = getAllWeapons(mockUrl);
    await thunk(mockDispatch)
    expect(fetchAll).toHaveBeenCalled()
  });

  it('calls dispatch with isLoading', async () => {
    fetchAll.mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockData
      })
    }));
    const thunk = getAllWeapons(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.isLoading(true));
  });

  it('calls dispatch with setWeapons', async () => {
    fetchAll.mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockData
      })
    }));
    const thunk = getAllWeapons(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.isLoading(false));
  });

  it.skip('calls dispatch with setWeapons', async () => {
    fetchAll.mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        mockData
      })
    }));
    const thunk = getAllWeapons(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setWeapons(mockData));
  });
});
