import { useParams } from 'react-router-dom'

function TaskDetailPage() {
  const { id } = useParams()

  return (
    <div className="page">
      <h2>任务详情</h2>
      <p>当前任务 id: <strong>{id}</strong></p>
      <p>Day 3 将在这里展示任务内容并编辑笔记。</p>
    </div>
  )
}

export default TaskDetailPage
