/*
 * @Author: mengyingshi 578453578@qq.com
 * @Date: 2022-08-02 17:25:09
 * @LastEditors: mengyingshi 578453578@qq.com
 * @LastEditTime: 2022-08-02 17:32:51
 * @FilePath: \react-demo1\src\index 数据渲染map.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRoot } from 'react-dom/client'

const songs = [
  { id: 1, name: '中国' },
  { id: 2, name: '广西' },
  { id: 3, name: '平南' },
  { id: 4, name: '镇隆' },
]
const list = songs.map((item) => (
  <li key={item.id}>
    {item.name}
    <h2>{item.id}</h2>
  </li>
))
const el = <ul>{list}</ul>
createRoot(document.querySelector('#root')).render(el)
