import { Link } from 'react-router-dom'
import Card from '../components/Card'
function HomePage() {
  return (
    <div className="page">
      <h2>首页 · 待办列表</h2>
      <Card title="路由测试说明">
        <p>Day 2 将在这里实现待办列表、新增、筛选。</p>
        <p>可以用下面的链接测试路由是否正常：</p>
        <ul>
          <li>
            <Link to="/task/123">/task/123</Link>
          </li>
        </ul>
      </Card>
    </div>
  )
}

export default HomePage
