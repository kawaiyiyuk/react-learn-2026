import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'

function HomePage() {
  const [tasks, setTasks] = useState([
    { id: '1', title: '学习 useState', completed: false },
    { id: '2', title: '实现任务列表渲染', completed: true },
    { id: '3', title: '后面再实现新增 / 删除', completed: false },
  ])
  const [inputValue, setInputValue] = useState('初始值')
  console.log('渲染时 inputValue =', inputValue)
  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }
  const handleAddTask = () => {
    const newId = crypto.randomUUID()
    const newTask = {id:newId,title: inputValue, completed: false}
    setTasks((prevTasks) => [...prevTasks, newTask])
    setInputValue('')
  }
  const handleDeleteTask = (id) => {
    // setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    console.log('删除任务', id)
    setTasks((prevTasks) =>  prevTasks.filter((task) => task.id !== id))
  }
  return (
    <div className="page">
      <h2>首页 · 待办列表</h2>

      <Card
        title="路由测试说明"
        footer={<span>小贴士：可以多试几个不同的 id，比如 /task/1、/task/abc。</span>}
      >
        <p>Day 2 将在这里实现待办列表、新增、筛选。</p>
        <p>可以用下面的链接测试路由是否正常：</p>
        <ul>
          <li>
            <Link to="/task/123">/task/123</Link>
          </li>
        </ul>
      </Card>

      <Card title="示例任务列表">
        <input placeholder='请输入任务' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type='button' onClick={handleAddTask}>新增</button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                />
                <span style={{ marginLeft: '8px' }}>
                  {task.title}
                  <span className={task.completed ? 'task-status done' : 'task-status'}>
                    （{task.completed ? '已完成' : '未完成'}）
                  </span>
                </span>
                <span>
                  <button type='button' onClick={() => handleDeleteTask(task.id)}>删除</button>
                </span>
              </label>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export default HomePage
