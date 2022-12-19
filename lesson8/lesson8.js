class AlarmClock {
    constructor(temp) {
        this.alarmCollection = [{}];
        this.timerId = [];
        this.temp = temp
    };

    addClock(time, fn, id) {
        if (id === undefined) {
            throw new Error('error text');
        } if (id === this.timerId) {
            console.error()
        } else {
            this.alarmCollection.push({time, fn, id})
        }

    };

    removeClock() {
        clearInterval(this.timerId.filter(alarmClock => alarmClock.timerId = id))

    };

    getCurrentFormattedTime() {
        let date = new Date()
        let hours = date.getHours();
        let mins = date.getMinutes();
        let output = this.temp
        .replace('hh', hours)
        .replace('mm', mins);
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        console.log(output)
    };

    start() {
        this.getCurrentFormattedTime();
        this.timerId = setInterval()
    };

    _checkClock(time) {
        if (time === output) {
            return fn
        }

    }
}

let phoneAlarm = new AlarmClock();
console.log(getCurrentFormattedTime())


















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