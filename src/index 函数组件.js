/*
 * @Author: mengyingshi 578453578@qq.com
 * @Date: 2022-08-02 14:41:05
 * @LastEditors: mengyingshi 578453578@qq.com
 * @LastEditTime: 2022-08-03 21:37:46
 * @FilePath: \react-demo1\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRoot } from 'react-dom/client'
//函数组件
//首字母必须大写 ，必须要有返回值
const Div = function () {
  return <span>你是个div</span>
}
const Hello = <div>你是谁:{Div()}</div>
createRoot(document.querySelector('#root')).render(Hello)
