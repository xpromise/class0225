import {debounce, throttle} from './module3';

// 分别暴露
export const name = 'jack';
export const age = 18;

console.log(debounce, throttle);

// 统一暴露
/*
export {
  name,
  age
}
*/
