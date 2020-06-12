/*
 * @Author: Rainy
 * @Date: 2020-06-05 17:59:22
 * @LastEditors: Rainy
 * @LastEditTime: 2020-06-08 16:25:16
 */

const Process = require('./utils/schemas');

const profile = {
  age: 18,
  major: 'software',
}

const info = [{
  name: 'Rain120',
  profile
}];

const output = Process('title', JSON.parse(JSON.stringify(info)));

console.log(JSON.stringify(output))
