import $ from 'jquery';
import some from './some';

$('.title').html('Some text!');

console.log(some.avg(1, 2, 8));
console.log(some.max(1, 4, 8));

console.log(some.merge({
  a: 1,
}, {
  b: 2,
}));

