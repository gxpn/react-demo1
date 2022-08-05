/*
 * @Author: mengyingshi 578453578@qq.com
 * @Date: 2022-08-02 14:41:05
 * @LastEditors: mengyingshi 578453578@qq.com
 * @LastEditTime: 2022-08-04 13:57:55
 * @FilePath: \react练习\react-demo1\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRoot } from 'react-dom/client'
import React from 'react'

// 类组件
// 大写开头 有返回值 有 render()函数
class Hello extends React.Component {
  render() {
    return <div>你好帅</div>
  }
}
createRoot(document.querySelector('#root')).render(<Hello />)
