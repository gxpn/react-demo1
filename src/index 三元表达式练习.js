import { createRoot } from 'react-dom/client'
const isLogin = true
const title = () => {
  return isLogin ? <div>尊贵的V10用户，欢迎您</div> : <button>请先登录</button>
}
createRoot(document.getElementById('root')).render(title())
