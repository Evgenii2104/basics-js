

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = [];
    };

    addClock(id, time, calback) {
        if (id === undefined || id === null) {
            throw new Error('id не верный');
        }
        
        const hasId = this.alarmCollection.some(alarm => alarm.id === id);
         if (hasId) {
            throw new Error('звонок существует');
        } 
        this.alarmCollection.push({id, time, calback});
    };

    removeClock(id) {
         this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id)
    };

    getCurrentFormattedTime() {
        const date = new Date()
        let hours = date.getHours().toString();
        let mins = date.getMinutes().toString();
        if (hours.length < 2) {
            hours = '0' + hours;
        }
        if (mins.length < 2) {
            mins = '0' + mins;
        }
        return (hours + ':' + mins);
        
    };

    start() {
        if (this.timerId !== undefined && this.timerId !== null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => {
                    this._checkClock(alarm)
                })
            }, 6000)
        } else {
            throw new Error('звонок запущен');
        }

    };

    _checkClock(alarm) {
        if (alarm.time === this.getCurrentFormattedTime()) {
            alarm.calback()   
        }
    };

    stop() {
        if (this.timerId !== undefined && this.timerId !== null) {
        clearInterval(this.timerId)
    }
    }

    printAlarms() {
        this.alarmCollection.forEach(alarm => {
            console.log(alarm.time, alarm.id, alarm.calback)
        })
    }

    clearAlarms() {
        if (this.timerId === undefined)
        this.alarmCollection = []
    }
}

const phoneAlarm = new AlarmClock();
//phoneAlarm.start()

phoneAlarm.addClock('Будильник №1', '17:10', () => {console.log('Пора вставать')});
phoneAlarm.addClock('Будильник №2', '17:11', () => {console.log('Давай, вставай уже!')});
phoneAlarm.addClock('Будильник №3', '17:12', () => {console.log('Вставай, а то проспишь!')});
phoneAlarm.addClock('Будильник №4', '16:09', () => {});
phoneAlarm.addClock('Будильник №5', '16:10', () => {});
console.log(phoneAlarm.alarmCollection);
phoneAlarm.removeClock('Будильник №4');
console.log(phoneAlarm.alarmCollection);
phoneAlarm.removeClock('Будильник №5');
console.log(phoneAlarm.alarmCollection);
phoneAlarm.start();
phoneAlarm.printAlarms()
phoneAlarm.stop();
console.log(phoneAlarm.timerId);








/*const a = true === 1;
const b = ':' === 2;
const c = 'женя' && 2 && [];

function getCloys (temp) {
    if (temp === undefined || isNaN(temp)) {
        return 'не число'
    }
    let res = null
    if (temp < 0) {
        res = 'одевай куртку';
    } else if (temp >= 0 && temp < 10) {
        res = 'одень палто';
    } else { 
        res = 'одевай плавки';
    } 
    return res
};

console.log(getCloys('2'));*/

/*const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newItems = [];

for (let i = 0; i < items.length; i++) {
    if (i % 2 !== 0) {
         newItems.push(items[i])
    }
}
console.log(newItems)*/

/*function calcAvgOfThird(items) {
    let sum = 0;
    let avg = 0;
    let count = 0;
    let i = 2;
    while ( i < items.length) {
        sum += items[i];
        count++
        i += 3
    } 
    avg = sum / count
    return avg
  }

  console.log(calcAvgOfThird([1, 4, 5, 8]));
  console.log(calcAvgOfThird([15, 18, 32, 56, 78, 81, 83, 86]));
  console.log(calcAvgOfThird([54, 3, 54, 123, 55, 23, 65, 1, 88]));*/

  const countries = {
    georgia: {
      area: 210,
      population: 200000,
      continent: 'asia'
    },
    romania: {
      area: 245,
      population: 130000,
      continent: 'europe'
    },
    mexico: {
      area: 12,
      population: 54000,
      continent: 'america'
    },
    france: {
      area: 876,
      population: 567000,
      continent: 'europe'
    },
    canada: {
      area: 56,
      population: 89000,
      continent: 'america'
    }
  };
  
  // Реализовать функцию calcAreaSum, которая:
  // - принимает 1 аргумент – объект стран (объект приведен выше)
  // - считает сумму площадей всех стран
  // Для перебора объекта использовать любые доступные способы
  // (статьи по теме: https://learn.javascript.ru/object, https://learn.javascript.ru/keys-values-entries,
  // https://learn.javascript.ru/while-for, https://learn.javascript.ru/array-methods
  //console.log(countries)
  function calcAreaSum(countries) {
    let sum = 0;
    const key = Object.values(countries);

    for (let i = 0; i < key.length; i++) {
        sum += key[i].area
    }
    return sum
  } 
  
  console.log(calcAreaSum(countries)); // 1399
  
  // Реализовать функцию calcPopulationSumByContinents, которая:
  // - принимает 1 аргумент – объект стран (объект приведен выше)
  // - считает сумму населения на каждом из континентов
  // Для перебора объекта использовать любые доступные способы
  // (статьи по теме: https://learn.javascript.ru/object, https://learn.javascript.ru/keys-values-entries,
  // https://learn.javascript.ru/while-for, https://learn.javascript.ru/array-methods
  
  function calcPopulationSumByContinents(countries) {
    const key = Object.values(countries);
    
    const res = key.reduce((total, arr) => {
        return { 
            ...total,
            [arr.continent]: 0,
         }
    }, {}) 

    for (let continent of Object.values(key)) {

        for (let k of  Object.keys(res)) {
                
            if (continent.continent === k) {
            
                res[k] += continent.population
            }
        }
    }
    return res
  }
  
   console.log(calcPopulationSumByContinents(countries)); // { asia: 200000, europe: 697000, america: 143000 }
  
   function filterNames(namesStr, filterStr) {
    let str = namesStr.toLowerCase().split(', ');
    let name = str.filter((el) => el.includes(filterStr.toLowerCase()));
    let res = name.map((x) => x[0].toUpperCase() + x.slice(1)).join(', ')

    return res
  }
  
  console.log(filterNames('Eric, Ethan, Frederic, Ernest', 'er')); // 'Eric,Ernest'
  console.log(filterNames('Harold, Joseph, Harry, Joshua, Oscar', 'Os')); // 'Joseph,Joshua,Oscar'


  function isPalindrome(str) {
    let origiStr = str.replace(/\s+/g, "").toLowerCase();
    let remStr = origiStr.split('').reverse().join('');
    if (origiStr === remStr) {
        return true
    } else {
        return false
    }
  }
  
   console.log(isPalindrome('Леша на полке клопа нашел')); // true
   console.log(isPalindrome('Аргентина манит негра')); // true
   console.log(isPalindrome('В саду растут яблоки')); // false





   // === ПЕРВАЯ ЧАСТЬ ЗАДАНИЯ ===



class Car {
    constructor(fuelCapacity, fuelAvailability, fuelRate) {
        this.fuelCapacity = fuelCapacity;  //количество литров топлива, которое вмещает бак
        this.fuelAvailability = fuelAvailability;  //количество литров топлива, которое в данный момент находится в баке;
        this.fuelRate = fuelRate;  //количество литров топлива, которое тратит машина в 1 секунду;
        this.idi = 0;
    }
    start() {
          if (this.fuelAvailability >= 0) {
            this.idi = setInterval(() => {
            if ((this.fuelAvailability - this.fuelRate) > 0) {
              this.fuelAvailability = this.fuelAvailability - this.fuelRate 
              console.log('двигатель запущен');
              //console.log(this.idi)
              if (this.fuelAvailability <= 0) {
                this.stop()
              } 
            }
            }, 1000)
        } else {
            console.log('двигатель остановлен')
        }
    }
    stop() {
        clearInterval(this.idi)
        this.idi = 0
        console.log('двигатель остановлен')
    }
    startBySchedule(seconds) {
       this.start()
       setTimeout(() => {this.stop()}, seconds * 1000)
    
    }
    isStarted() {
        if (this.idi > 0) {
            return !!this.idi
        } else {
            return !!this.idi 
        }

    }
    refuel(fuel) {
        this.fuelAvailability = this.fuelAvailability + fuel;
        if (this.fuelAvailability > this.fuelCapacity) {
            this.fuelAvailability = this.fuelCapacity;
        }
    }
}

 const car = new Car(10, 8, 2); // описание параметров: fuelCapacity = 10, fuelAvailability = 8, fuelRate = 2
 /*car.startBySchedule(3); // запускаем двигатель на 3 секунды
 console.log(car.isStarted()); // true (двигатель запущен)
 //console.log(car.fuelAvailability, car.fuelRate, car.fuelCapacity, car.idi)
 setTimeout(() => {
   console.log(car.fuelAvailability); // количество топлива (fuelAvailability) должно стать равно 2
   console.log(car.isStarted()); // false (двигатель остановлен)
   car.refuel(20); // дозаправляем автомобиль на 20 литров
   console.log(car.fuelAvailability); // количество топлива (fuelAvailability) должно стать равно 10 (полный бак)
   car.start(); // запускаем двигатель автомобиля
   console.log(car.isStarted()); // true (двигатель запущен)
   setTimeout(() => {
     car.stop(); // останавливаем двигатель автомобиля
     console.log(car.isStarted()); // false (двигатель остановлен)
     console.log(car.fuelAvailability); // количество топлива (fuelAvailability) должно стать равно 6
   }, 2000);
 }, 4000);*/
 



 // === ВТОРАЯ ЧАСТЬ ЗАДАНИЯ ===



 class Truck extends Car {
    constructor(fuelCapacity, fuelAvailability, fuelRate, loadCapacity, idi) {
        super(fuelCapacity, fuelAvailability, fuelRate, idi);
        this.loadCapacity = loadCapacity;  //сколько килограмм груза может перевозить грузовик
        this.loadOccupancy = 0; //сколько килограмм груза сейчас находится в грузовике (по умолчанию равно 0)
    }
    load(weight) {
        this.loadOccupancy = this.loadOccupancy + weight;
        if (this.loadOccupancy > this.loadCapacity) {
            this.loadOccupancy = this.loadCapacity
        }
    }
    start() {
        if (this.fuelAvailability >= 0) {
            this.idi = setInterval(() => {
            if ((this.fuelAvailability - this.fuelRate) > 0) {
                if (this.loadOccupancy <= 0) {
                    this.fuelAvailability = this.fuelAvailability - this.fuelRate
                } else {
                this.fuelAvailability = this.fuelAvailability - (this.fuelRate + ((this.fuelRate * this.loadOccupancy) / this.loadCapacity)) 
              console.log('двигатель запущен');
              //console.log(this.idi)
                }
              if (this.fuelAvailability <= 0) {
                super.stop()
              } 
            }
            }, 1000)
        } else {
            console.log('двигатель остановлен')
        }
    }

  }

   const truck = new Truck(20, 18, 2, 10); // описание параметров: fuelCapacity = 20, fuelAvailability = 18, fuelRate = 2, loadCapacity = 10
console.log(truck.loadOccupancy); // грузовик пустой (loadOccupancy = 0)
 truck.startBySchedule(3); // запускаем двигатель на 3 секунды (каждую секунду мы будем тратить по 2 литра топлива)
console.log(truck.isStarted()); // true (двигатель запущен)
 setTimeout(() => {
   console.log(truck.fuelAvailability); // количество топлива (fuelAvailability) должно стать равно 12
   console.log(truck.isStarted()); // false (двигатель остановлен)
   truck.refuel(5); // дозаправляем автомобиль на 5 литров
   console.log(truck.fuelAvailability); // количество топлива (fuelAvailability) должно стать равно 17
   truck.load(2); // загружам грузовик товаром
   console.log(truck.loadOccupancy); // грузовик загружен (loadOccupancy = 2)
   truck.load(3); // загружам грузовик товаром
   console.log(truck.loadOccupancy); // грузовик загружен (loadOccupancy = 5)
   truck.startBySchedule(3); // запускаем двигатель на 3 секунды (каждую секунду мы будем тратить по 3 литра топлива, потому что грузовик загружен на 5 из 10)
   setTimeout(() => {
     console.log(truck.fuelAvailability); // количество топлива (fuelAvailability) должно стать равно 8
     console.log(truck.isStarted()); // false (двигатель остановлен)
   }, 4000);
 }, 4000);






















/*class AlarmClocks {
    constructor({temp}) {
        this.alarmCollection = [];
        this.timerId = null;
        this.temp = temp;      
    };

    addClock(timerClock) {
        if (timerClock === this.getCurrentFormattedTime) {
            console.log(setTimeout('пора вставать', 1))
        }
    };
    
    getCurrentFormattedTime() {
        count++;

        if (count > 5) {
            clearInterval(this.timer)
        }
        let date = new Date()
        let hours = date.getHours();
        let mins = date.getMinutes();
        let sec = date.getSeconds();
        let output = this.temp
        .replace('hh', hours)
        .replace('mm', mins)
        .replace('ss', sec);
        console.log(output)
        
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.getCurrentFormattedTime();
        this.timer = setInterval(() => this.getCurrentFormattedTime(), 1000);
    }
}


let count = 0;
const phoneAlarma = new AlarmClocks({temp: 'hh:mm:ss'});
phoneAlarma.start();
phoneAlarma.stop();
console.log(phoneAlarma.timer)*/