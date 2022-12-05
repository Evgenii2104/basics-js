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

//const sword = new Weapon('Старый меч', 20, 10, 1);
  
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

  const weapon = [
    new Weapon('Рука', 1, Infinity, 1),
    new Weapon('Лук', 10, 200, 3),
    new Weapon('Меч', 25, 500, 1),
    new Weapon('Нож', 5, 300, 1),
    new Weapon('Посох', 8, 300,2)
  ];

  console.log(weapon)

  const bestWeapon = [
    new Weapon (this.name, this.attackLevel, this.durability, this.range),
    new Weapon('Длинный лук' + this.name, 15, this.durability, 4),
    new Weapon('Секира' + this.name, 27, 800, this.range),
    new Weapon('Посох Бури' + this.name, 10, this.durability, 3)
  ]
  console.log(bestWeapon)