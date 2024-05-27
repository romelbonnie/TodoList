import "./style.css";

const TodoItem = ({ data, onEdit }) => {
  const handleOnEdit = (event) => {
    onEdit(data);
    // event.preventDefault();
  };

  return (
    <div className="item">
      <div className="itemInfo">
        <div className="todoTitle">{data.title}</div>
        <div className="todoDesc">{data.description}</div>
      </div>
      <button onClick={handleOnEdit}>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
