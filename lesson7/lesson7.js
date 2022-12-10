// 1 задание

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
  getNames() {
    console.log(this.name)
  }
}


const weapon1 = new Weapon('Рука', 1, Infinity, 1);
const weapon2 = new Weapon('Лук', 10, 200, 3);
const weapon3 = new Weapon('Меч', 25, 500, 1);
const weapon4 = new Weapon('Нож', 5, 300, 1);
const weapon5 = new Weapon('Посох', 8, 300,2);

//console.log(weapon1, weapon2, weapon3, weapon4, weapon5)

const bestWeapon1 = new Weapon('Длинный лук ' + weapon2.name, 15, weapon2.durability, 4);
const bestWeapon2 = new Weapon('Секира ' + weapon3.name, 27, 800, weapon3.range)
const bestWeapon3 = new Weapon('Посох Бури ' + weapon5.name, 10, weapon5.durability, 3)

//console.log(bestWeapon1, bestWeapon2, bestWeapon3);

//console.log(getNames())



// 2 задание

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};
console.log(sleep(15))

let memory = {
    arguments: [],
    result: []
};

function sum(...args) {
    sleep(100);
    return res = args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }; 
  
   function memorize(sum, limit) {
    limit < 5; 
     sum() 
   }

  function compareArrays( arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
  }

  console.log(compareArrays([8], [8, 9])); 
  console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));
  console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]));
  console.log(compareArrays([1, 2, 3], [2, 3, 1]));
  console.log(compareArrays([8, 1, 2], [8, 1, 2]))



  const mSum = memorize(sum, 5);

  console.log(sum(3, 4, 6));
  console.log(sum(5, 7, 6));
  console.log(sum(2, 6, 6))
  console.log(mSum)