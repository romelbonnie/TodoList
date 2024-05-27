import "./style.css";

const TodoItem = ({ data, onEdit, onRemove }) => {
  const handleOnEdit = (event) => {
    onEdit(data);
    // event.preventDefault();
  };

  const handleOnRemove = () => {
    if (window.confirm("Are you sure you to remove this todo item?")) {
      onRemove(data._id);
    }
  };

  return (
    <div className="item">
      <div className="itemInfo">
        <div className="todoTitle">{data.title}</div>
        <div className="todoDesc">{data.description}</div>
      </div>
      <button onClick={handleOnEdit}>Edit</button>
      <button onClick={handleOnRemove}>Delete</button>
    </div>
  );
};

export default TodoItem;
