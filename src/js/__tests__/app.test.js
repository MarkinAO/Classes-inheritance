import Character from '../app';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';

test('Test create character', () => {
  const bowman = new Bowman('Лучник');
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);

  const undead = new Undead('Нежить');
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);

  const swordsman = new Swordsman('Мечник');
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);

  const zombie = new Zombie('Зомби');
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);

  const magician = new Magician('Маг');
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);

  const daemon = new Daemon('Демон');
  expect(daemon.attack).toBe(10);
  expect(daemon.defence).toBe(40);

  expect(() => new Daemon('')).toThrow('Передано неверное имя персонажа');
});

test('Test levelup character', () => {
  const bowman = new Bowman('Лучник');
  bowman.health = 50;
  bowman.levelUp();
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(2);
  expect(bowman.attack).toBe(30);
  expect(bowman.defence).toBe(30);

  bowman.health = 0;
  expect(() => { bowman.levelUp(); }).toThrow('Нельзя повысить уровень умершего персонажа');
});

test('Test damage character', () => {
  const bowman = new Bowman('Лучник');
  bowman.damage(100);
  expect(bowman.health).toBe(25);
  bowman.damage(100);
  expect(bowman.health).toBe(0);
});

test('Create new class', () => {
  expect(() => {
    class Ork extends Character {
      constructor(name) {
        super(name, '');
      }
    }
    return new Ork('Орк');
  }).toThrow('Передан неверный тип персонажа');
});
