/*
 * @Author: chenpan
 * @Date: 2022-07-20 15:09:08
 * @LastEditTime: 2022-07-27 17:09:57
 * @LastEditors: chenpan
 * @Description: 
 * @FilePath: /rich/packages/reqGenerator/src/reqGenerator.ts
 */


import got from 'got';
import template from "@babel/template";
import generate from "@babel/generator";
import * as t from "@babel/types";
import { readFile, appendFile } from 'fs'



const transformer = ({NAME, METHOD, URL}: Record<string, string>) => {
    //转化模版
    //@ts-ignore
    const buildRequire = template.default(`
    export const NAME = () => {
        return request(URL, {
        method: METHOD,
        });
    };
    `);

    //生成ast
    const ast = buildRequire({
    //@ts-ignore
    NAME: t.default.identifier(NAME),
    //@ts-ignore
    URL: t.default.stringLiteral(URL),
    //@ts-ignore
    METHOD: t.default.stringLiteral(METHOD),
    });

    //ast转代码
    //@ts-ignore
    const code = generate.default(ast, { sourceMaps: true }).code

    // readFile('./test.ts', (err, data) => {
    //     if(err) throw err; 

    // })
    appendFile('./test.ts', `${code}\n\n`, err => {
    if(err) throw err
    })

}


//获取转化的源数据
const  data = (await got('xxx')).body
let res = JSON.parse(data).paths
console.log(res)
for (const key in res) {
    for(const iKey in res[key]){
        transformer({
            NAME: res[key][iKey].operationId, 
            METHOD: iKey, 
            URL: key
        })
    }
}
