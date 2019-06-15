import {debounce, throttle} from './module3';

const sum = debounce((...args) => args.reduce((p, c) => p + c, 0), 1000);

const add = throttle((x, y) => x + y, 2000);

export {add, sum};