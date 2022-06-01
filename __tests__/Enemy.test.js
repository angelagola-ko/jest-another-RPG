const Enemy = require('../lib/Enemy');
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');


test('creates an enemy object', () => {
    const enemy = new Enemy('Medusa', 'snakes');

    expect(enemy.name).toBe('Medusa', 'snakes');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
});

test('get enemys health value', () => {
    const enemy = new Enemy('Medusa' , 'Snake');

    expect(enemy.getHealth()).toEqual(expect.stringContaining(enemy.health.toString()));
});

test('checks if enemy is alive or not', () => {
    const enemy = new Enemy('Medusa' , 'Snake');

    expect(enemy.isAlive()).toBeTruthy();

    enemy.health = 0;

    expect(enemy.isAlive()).toBeFalsy();
});

test("subtracts from enemy's health", () => {
    const enemy = new Enemy('Medusa' , 'Snake');
    const oldHealth = enemy.health;

    enemy.reduceHealth(5);

    expect(enemy.health).toBe(oldHealth - 5);

    enemy.reduceHealth(99999);//?

    expect(enemy.health).toBe(0);//?
});

test('gets enemys attack value', () => {
    const enemy= new Enemy('Medusa' , 'Snake');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test('gets a description of the enemy', () => {
    const enemy = new Enemy('Medusa', 'snakes');

    expect(enemy.getDescription()).toEqual(expect.stringContaining('Medusa'));
    expect(enemy.getDescription()).toEqual(expect.stringContaining('snakes'));
})

