import { Component } from 'react'
import { createRoot } from 'react-dom/client'

class Hello extends Component {
  state = {
    name: '张三',
    age: 30,
    dizhi: '广东',
  }
  render() {
    return (
      <div>
        名字：{this.state.name},年龄:{this.state.age},地址：{this.state.dizhi}
        <div>
          <button onClick={this.count}>age+1</button>
          <a onClick={this.mysage} href="http://baidu.com">
            点击你百度
          </a>
        </div>
      </div>
    )
  }
  count = () => {
    return this.state.age
  }
  mysage = (e) => {
    //   this.state.age++
    e.preventDefault()
    console.log('你好')
  }
}

createRoot(document.querySelector('#root')).render(<Hello />)
