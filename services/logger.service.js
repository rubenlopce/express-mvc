const debug = require('debug');

let log = debug('express-mvc:debug');
let warn = debug('express-mvc:warning');
let error = debug('express-mvc:error');

class Logger {
    count = 0;
    log(...args){
        this.count++;

        log(...args);
    }
    warn(...args){
        this.count++;

        warn(...args);
    }
    error(...args){
        this.count++;

        error(...args);
    }

    getCount(){
        return this.count;
    }
}