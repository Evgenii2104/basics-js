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
            return 0;
        } if (this.durability >= ((this.firstDurability / 100) * 30)) {
            return this.attackLevel;
        } if (this.durability < ((this.firstDurability / 100) * 30)) {
            return this.attackLevel / 2;
        } 
    }
    isBroken() {
        if (this.durability > 0) {
            return false;
        } if (this.durability <= 0) {
            return true;
        }
    }
}

class Hand extends Weapon {
    constructor(name, attackLevel, durability, range) {
        super(name, attackLevel, durability, range);
        
    }
}

class Onion extends Weapon {
    constructor(name, attackLevel, durability, range) {
        super(name, attackLevel, durability, range);
    }
}

class Sword extends Weapon {
    constructor(name, attackLevel, durability, range) {
        super(name, attackLevel, durability, range);
    }
}

class Knife extends Weapon {
    constructor(name, attackLevel, durability, range) {
        super(name, attackLevel, durability, range);
    }
}

class Staff extends Weapon {
    constructor(name, attackLevel, durability, range) {
        super(name, attackLevel, durability, range);
    }
}

class LongOnion extends Onion {
    constructor(name, attackLevel, durability, range) {
        super(name, attackLevel, durability, range);
    }
} 

class Ax extends Sword {
    constructor(name, attackLevel, durability, range) {
        super(name, attackLevel, durability, range);
    }
}

class StaffStorm extends Staff {
    constructor(name, attackLevel, durability, range) {
        super(name, attackLevel, durability, range)
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

  const weapon1 = new Hand('Рука', 1, Infinity, 1);
  const weapon2 = new Onion('Лук', 10, 200, 3);
  const weapon3 = new Sword('Меч', 25, 500, 1);
  const weapon4 = new Knife('Нож', 5, 300, 1);
  const weapon5 = new Staff('Посох', 8, 300,2);
  
  console.log(weapon1, weapon2, weapon3, weapon4, weapon5)

  const bestWeapon1 = new LongOnion('Длинный лук ', 15, weapon2.durability, 4);
  const bestWeapon2 = new Ax('Секира ', 27, 800, weapon3.range)
  const bestWeapon3 = new StaffStorm('Посох Бури ' , 10, weapon5.durability, 3)

  console.log(bestWeapon1, bestWeapon2, bestWeapon3);

  


  //   задание  2


class StudentLog {
    constructor (name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.mag = {};
        this.average = [] 
    }
    getName () {
        return (`${this.name}  ${this.lastName}`)
    } 
    addGrade(grade, subject) {
        if (this.mag[subject] === undefined) {
            this.mag[subject] = []}
        const grades = this.mag[subject];
        if (grade >= 6 || grade <= 0 || isNaN(grade)) {
            return (false)
        }  else {
            grades.push(grade)
            return (this.mag[subject].length)   
        }
    }
    getAverageBySubject(subject) {
        let averageSubjects = 0;
        let summ = 0;
        
        if (this.mag[subject] === undefined) {
            return(this.mag[subject] = 0);
        } else {
             for (let i = 0; i < this.mag[subject].length; i++) {
                summ += this.mag[subject][i];
                averageSubjects = summ / this.mag[subject].length
            }
                const ave = this.average
                ave.push(averageSubjects)
                return averageSubjects
        }
    }
    getTotalAverage() {
        let allAverage = 0;
        let len = 0;
        let summ = 0;
        for (let subject of Object.keys(this.mag)) {
        
          for (let i = 0; i < this.mag[subject].length; i++) {
                summ += this.mag[subject][i];
        
            } 
            len += this.mag[subject].length;      
        }   
        allAverage = summ / len;
        return allAverage
    }    
    }



const log = new StudentLog('Олег', 'Никифоров');

console.log(log.getName());
console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade(4, 'algebra'));
console.log(log.addGrade(5, 'algebra'))
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(4, 'geometry'));


console.log(log.getAverageBySubject('geometry'))
console.log(log.getAverageBySubject('algebra')); 
//console.log(log.getAverageBySubject('math')); 
//console.log(Object.values(log.mag))

console.log(log.getTotalAverage());

