import { Link } from 'react-router-dom'

function Layout({ children }) {
  console.log('Layout 渲染，children 为：', children)
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>我的React学习项目</h1>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/settings">设置</Link>
          <Link to="/about">关于</Link>
        </nav>
      </header>
      <main className="layout-main">
        {children}
      </main>
    </div>
  )
}

export default Layout
