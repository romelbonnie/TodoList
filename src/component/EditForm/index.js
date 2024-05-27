import { useState, useEffect } from "react";
import "./style.css";

const EditForm = ({ data = {}, isVisible, onSubmit, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOnsubmit = (e) => {
    onSubmit({ title, description, id: data._id });
    onClose();
    e.preventDefault();
  };

  const handleOnClose = (e) => {
    onClose();
    e.preventDefault();
  };

  useEffect(() => {
    setTitle(data.title);
    setDescription(data.description);
    console.log("DATA", data);
  }, [data]);

  return (
    isVisible && (
      <div className="modal">
        <div className="modalContent">
          <button className="closeBtn" onClick={handleOnClose}>
            X
          </button>
          <form onSubmit={handleOnsubmit}>
            <h2>Edit Todo</h2>
            <div className="inputContainer">
              <div className="inputTitle">Title:</div>
              <input
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Todo title"
              />
            </div>
            <div className="inputContainer">
              <div className="inputTitle">Description:</div>
              <input
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Todo title"
              />
            </div>
            <div className="inputContainer">
              <input className="inputBtn" value="Submit" type="submit" />
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default EditForm;
