export default class Character {
  constructor(name, type) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Передано неверное имя персонажа');
    }
    if (typeof type === 'string' && type.length > 0) {
      this.type = type;
    } else {
      throw new Error('Передан неверный тип персонажа');
    }
    this.health = 100;
    this.level = 1;
    if (type === 'Bowman' || type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman' || type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician' || type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }
  }

  damage(points) {
    if (this.health > 0) {
      const result = this.health - points * (1 - this.defence / 100);
      this.health = result >= 0 ? result : 0;
    }
  }
}
