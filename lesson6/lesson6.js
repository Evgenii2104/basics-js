class Weapon {
    constructor(name, attackLevel, durability, range) {
        this.name = name;
        this.attackLevel = attackLevel;
        this.durability = durability;
        this.firstDurability = durability;
        this.range = range;
    }
    takeDamage(damage) {
        this.durability = this.durability - damage;
        if (this.durability < 0) {
            this.durability = 0
        } 

    }
    getDamage() {
        if (this.durability === 0) {
        console.log(this.attackLevel = 0);
        } if (this.durability >= ((this.firstDurability / 100) * 30)) {
            console.log(this.attackLevel)
        } if (this.durability < ((this.firstDurability / 100) * 30)) {
            console.log(this.attackLevel / 2);
        } 
    }
    isBroken() {
        if (this.durability > 0) {
            console.log(false)
        } if (this.durability <= 0) {
            console.log(true)
        }
    }
}

//const sword = new Weapon('Старый меч', 20, 10, 1);    проверка методов
  
  //sword.takeDamage(5);
  //console.log(sword.durability); 
  //console.log(sword.getDamage())
  
  //sword.takeDamage(50);
  //console.log(sword.durability);
  //console.log(sword.getDamage());

  //const arm = new Weapon('Рука', 1, Infinity, 1);

  //arm.takeDamage(20);
  //console.log(arm.durability); 
  //console.log(arm.getDamage());
  //console.log(arm.isBroken());

  //const bow = new Weapon('Лук', 10, 200, 3);
  
 // bow.takeDamage(20);
  //console.log(bow.durability); 
  //console.log(bow.getDamage());
  //console.log(bow.isBroken());

  //bow.takeDamage(200);
  //console.log(bow.durability); 
  //console.log(bow.getDamage());
  //console.log(bow.isBroken());

  const weapon1 = new Weapon('Рука', 1, Infinity, 1);
  const weapon2 = new Weapon('Лук', 10, 200, 3);
  const weapon3 = new Weapon('Меч', 25, 500, 1);
  const weapon4 = new Weapon('Нож', 5, 300, 1);
  const weapon5 = new Weapon('Посох', 8, 300,2);
  
  console.log(weapon1, weapon2, weapon3, weapon4, weapon5)

  const bestWeapon1 = new Weapon('Длинный лук ' + weapon2.name, 15, weapon2.durability, 4);
  const bestWeapon2 = new Weapon('Секира ' + weapon3.name, 27, 800, weapon3.range)
  const bestWeapon3 = new Weapon('Посох Бури ' + weapon5.name, 10, weapon5.durability, 3)

  console.log(bestWeapon1, bestWeapon2, bestWeapon3);



  //   задание  2


class StudentLog {
    constructor (name, lastName) {
        this.name = name;
        this.lastName = lastName
    }
    getName () {
        console.log(`${this.name}  ${this.lastName}`)
    } 
    addGrade(grade, subject) {
        this.grade = grade;
        this.subject = subject;
        if (this.grade >= 6 || this.grade <= 0 || isNaN(this.grade)) {
            console.log(false, [this.grade].length = 0)
        } if (this.grade >= 1 || this.grade <= 5) {
            console.log(this.grade += 1)
        }
    }
}

const log = new StudentLog('Олег', 'Никифоров');
console.log(log.getName());
console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'algebra'))

