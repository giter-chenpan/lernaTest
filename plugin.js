/*
 * @Author: chenpan
 * @Date: 2022-07-26 15:25:55
 * @LastEditTime: 2022-07-26 21:46:44
 * @LastEditors: chenpan
 * @Description: 
 * @FilePath: /rich/plugin.js
 */
module.exports = function (babel) {
    const { types: t } = babel;

    return {
        name: "ast-transform", // not required
        visitor: {
            Identifier: function (path) {
                path.node.name = path.node.name.split("").reverse().join("");
            }
        }
    };
}