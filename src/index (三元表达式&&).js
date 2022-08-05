/*
 * @Author: mengyingshi 578453578@qq.com
 * @Date: 2022-08-02 17:03:52
 * @LastEditors: mengyingshi 578453578@qq.com
 * @LastEditTime: 2022-08-02 17:05:17
 * @FilePath: \react-demo1\src\index (三元表达式&&).js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import React from 'react'
import { createRoot } from 'react-dom/client'
// const isLoding = 19
// 三元表达式
// const title = <div>条件渲染：{isLoding > 18 ? '可以去网吧' : '不能去'}</div>
// // const container = document.getElementById('root')
// 逻辑与&&
const isData = true

const title = () => {
  return isData && <div>isData为true时显示</div>
}
const el = (
  <div>
    <h1>他显示吗：</h1>
    {title()}
  </div>
)
createRoot(document.getElementById('root')).render(el)
