/*
 * @Author: chenpan
 * @Date: 2022-07-26 15:25:55
 * @LastEditTime: 2022-07-27 11:07:10
 * @LastEditors: chenpan
 * @Description: 
 * @FilePath: /rich/plugin.js
 */
module.exports = function (babel) {
    const { types: t } = babel;

    return {
        name: "ast-transform", // not required
        visitor: {
            // StringLiteral: function (path) {
            //     if (path.node.value !== 'operationId') return
            //     path.node.value = '111'
            //     // path.findParent((path) => path.node.value)
            // }
        }
    };
}