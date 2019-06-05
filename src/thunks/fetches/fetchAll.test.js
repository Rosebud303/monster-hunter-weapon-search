import fetchAll from './fetchAll'
// jest.mock('./fetchAll')

const mockWeps = [{
  craftable: true,
  damageType: "sever",
  id: 1,
  maxDMG: 384,
  minDMG: 80,
  name: "Buster Sword 1",
  picture: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png",
  rarity: 1,
  type: "great-sword",
}, {
  craftable: true,
  damageType: "sever",
  id: 2,
  maxDMG: 384,
  minDMG: 80,
  name: "Buster Sword 2",
  picture: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png",
  rarity: 1,
  type: "great-sword",
}]

describe('fetchAll', () => {
  let mockUrl;

  beforeEach(() => {
    mockUrl =  "localhost:3001/api/v1/weapons"

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok:true,
        status: 200,
        json: () => Promise.resolve(mockWeps)
    }));
  });

  it.skip('Should take in a url as the param' , async () => {
    await fetchAll(mockUrl);
    expect(fetch).toEqual(mockWeps)
  });
});
