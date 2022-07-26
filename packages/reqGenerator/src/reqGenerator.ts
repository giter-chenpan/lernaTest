/*
 * @Author: chenpan
 * @Date: 2022-07-20 15:09:08
 * @LastEditTime: 2022-07-26 21:44:12
 * @LastEditors: chenpan
 * @Description: 
 * @FilePath: /rich/packages/reqGenerator/src/reqGenerator.ts
 */


import got from 'got';

let res: null = null;
const  data = (await got('xxxxxx')).body

res = JSON.parse(data)

console.log(data)
