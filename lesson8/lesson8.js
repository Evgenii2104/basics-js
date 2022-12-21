

class AlarmClock {
    constructor(temp) {
        this.alarmCollection = [{}];
        this.timerId = [];
        this.temp = temp
    };

    addClock( time, fn, id) {
        console.log()
        if (id === undefined) {
            throw new Error('error text');
        } if (id === this.timerId) {
            console.error()
        } else {
            return this.alarmCollection.push({time, fn, id})
        }

    };

    removeClock(id) {
        return this.alarmCollection.shift(this.alarmCollection.filter(alarmCollection => alarmCollection.id = id));
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
        this.addClock();
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


phoneAlarm.addClock('00:44', _checkClock(), 'Будильник №1');
phoneAlarm.addClock('00:45', _checkClock(), 'Будильник №2');
phoneAlarm.addClock('00:46', _checkClock(), 'Будильник №3');



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