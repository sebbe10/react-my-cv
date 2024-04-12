import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState([
    ["Lars", " ", "2022-05-10"],
    ["Kalle", " ", "2023-10-22"],
    ["Erik", " ", " 2024-03-12"],
  ]);
  const [addTodo, setAddTodo] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleInputTodo = (e) => {
    setAddTodo(e.target.value);
  };

  const handleDateTodo = (e) => {
    setTodoDate(e.target.value);
  };
  const handleAddTodo = () => {
    if (addTodo.trim() !== "" && todoDate.trim() !== "") {
      setTodo((t) => [...t, [addTodo, " ", todoDate]]);
      let addPopUp = document.querySelector(".thePopUp");
      addPopUp.classList.add("activatePopUp");
      setTimeout(() => {
        addPopUp.classList.remove("activatePopUp");
      }, 1000);
    }

    setAddTodo("");
    setTodoDate("");
    document.querySelector(".theInput").value = "";
    document.querySelector(".theInputDate").value = "";
  };

  const handleUppTodo = (index) => {
    const pushUpp = [...todo];
    if (index > 0) {
      [pushUpp[index], pushUpp[index - 1]] = [
        pushUpp[index - 1],
        pushUpp[index],
      ];
      setTodo(pushUpp);
    }
  };

  const handleDownTodo = (index) => {
    const pushDown = [...todo];
    if (index < todo.length - 1) {
      [pushDown[index], pushDown[index + 1]] = [
        pushDown[index + 1],
        [pushDown[index]],
      ];
      setTodo(pushDown);
    }
  };

  const handleRemoveTodo = (index) => {
    let removeButton = document.querySelector(".thePopUpRemove");
    removeButton.classList.add("activateRemove");
    setTimeout(() => {
      removeButton.classList.remove("activateRemove");
    }, 1000);
    setTodo(todo.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="divForTodo">
        <div className="todoGame">
          <div className="theLayoutForTodo">
            <h2 className="theH2">Todo List</h2>
            <div className="theInputAndButton">
              <input
                className="theInput"
                type="text"
                placeholder="Enter a task"
                onChange={handleInputTodo}
              />

              <input
                type="date"
                className="theInputDate"
                onChange={handleDateTodo}
              />
              <button className="addButton" onClick={handleAddTodo}>
                Add todo
              </button>
            </div>
            <div className="thePopUp">Du la till i listan</div>
            <div className="thePopUpRemove">Du tog bort från listan</div>
          </div>

          <ol className="theOl">
            {todo.map((todo, index) => (
              <li className="theLi" key={index}>
                {todo}

                <div className="theButtons">
                  <button
                    onClick={() => handleRemoveTodo(index)}
                    className="fa-solid fa-trash btn-delete"></button>
                  <button
                    onClick={() => handleUppTodo(index)}
                    className="fa-solid fa-arrow-up btn-upp"></button>
                  <button
                    onClick={() => handleDownTodo(index)}
                    className="fa-solid fa-arrow-down btn-down"></button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default TodoList;
