import "./style.css";

const TodoItem = ({ data }) => {
  return (
    <div className="item">
      <div className="itemInfo">
        <div className="todoTitle">{data.title}</div>
        <div className="todoDesc">{data.description}</div>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
