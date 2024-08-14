import './index.css'

const TodosItem = props => {
  const {todos, deleteTodo} = props
  const {id, title} = todos

  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <div key={id} className="del-container">
        <p className="title">{title}</p>
        <button type="button" className="del-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodosItem
