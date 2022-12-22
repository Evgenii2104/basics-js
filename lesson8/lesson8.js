

class AlarmClock {
    constructor() {
        this.alarmCollection = [{}];
        this.timerId = [];
       // this.temp = temp
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
        let date = new Date()
        let hours = date.getHours().toString();
        let mins = date.getMinutes().toString();
        if (hours.length < 2) {
            hours = '0' + hours;
        }
        if (mins.length < 2) {
            mins = '0' + mins;
        }
        let clock = hours + ':' + mins;
        console.log(clock)
    };

    start() {
        this.getCurrentFormattedTime();
        this.temp = setInterval(() => this.getCurrentFormattedTime(), 1000);
        //this.addClock();
        this._checkClock();

    };

    _checkClock(time) {
        if (time === this.getCurrentFormattedTime) {
            setInterval(() => console.log('Пора вставать'), 1000);
            setInterval(() => console.log('Давай, вставай уже!'), 2000);
            setInterval(() => console.log('Вставай, а то проспишь!'), 3000);
        }
    };

    stop() {
        clearInterval(this.temp)
    }

    printAlarms() {
        return this.alarmCollection;
    }

    clearAlarms() {
        clearInterval(this.alarmCollection)
    }
}

const phoneAlarm = new AlarmClock();
phoneAlarm.start()

phoneAlarm.addClock('Будильник №1', '00:44', () => {});
phoneAlarm.addClock('Будильник №2', '00:45', () => {});
phoneAlarm.addClock('Будильник №3', '00:46', () => {});
phoneAlarm.addClock('Будильник №4', '00:47', () => {});
phoneAlarm.addClock('Будильник №5', '00:48', () => {});
console.log(phoneAlarm.alarmCollection);
phoneAlarm.removeClock('Будильник №4');
console.log(phoneAlarm.alarmCollection);
phoneAlarm.removeClock('Будильник №5');
console.log(phoneAlarm.alarmCollection);



/*Пора вставать
Давай, вставай уже!
Вставай, а то проспишь!*/


















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