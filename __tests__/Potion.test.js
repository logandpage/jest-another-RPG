const Potion = require('../lib/potion')

test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
  });

test('creates a random potion objecct', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(string));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});