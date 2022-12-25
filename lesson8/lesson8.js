

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
        if (alarm.time === this.getCurrentFormattedTime) {
            alarm.calback()
        }
    };

    stop() {
        if (!this.timerId) {
        clearInterval(this.timerId)}
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
phoneAlarm.start()

phoneAlarm.addClock('Будильник №1', '16:06', () => {console.log('Пора вставать')});
phoneAlarm.addClock('Будильник №2', '16:07', () => {console.log('Давай, вставай уже!')});
phoneAlarm.addClock('Будильник №3', '16:08', () => {console.log('Вставай, а то проспишь!')});
phoneAlarm.addClock('Будильник №4', '16:09', () => {});
phoneAlarm.addClock('Будильник №5', '16:10', () => {});
console.log(phoneAlarm.alarmCollection);
phoneAlarm.removeClock('Будильник №4');
console.log(phoneAlarm.alarmCollection);
phoneAlarm.removeClock('Будильник №5');
console.log(phoneAlarm.alarmCollection);
phoneAlarm.start();
phoneAlarm.printAlarms()







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