

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
console.log(phoneAlarm.timerId)







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
            [arr.continent]: arr.population,
         }
    }, {})
    console.log(res);
    
    return res
  }
  
   console.log(calcPopulationSumByContinents(countries)); // { asia: 200000, europe: 697000, america: 143000 }
  



























/*class AlarmClock {
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
const phoneAlarm = new AlarmClock({temp: 'hh:mm:ss'});
phoneAlarm.start();*/