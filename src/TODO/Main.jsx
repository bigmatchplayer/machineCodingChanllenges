import React, { useEffect, useState } from "react";

const Main = () => {
  const [toDoList, setToDOList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [page, setPages] = useState([1, 2, 3]);
  const [startIndex, setStartIndex] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const limit = 2;
  const [rows, setRows] = useState(0);
  useEffect(() => {
    const total = toDoList.length;
    setTotalData(total);
    setRows(Math.ceil(total / 2));
  }, [toDoList]);
  console.log("rows", rows);

  // const pagenatedRows=

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    if (newTask == "") {
      return;
    }
    const newTaskItem = {
      id: new Date().getTime(),
      task: newTask,
      completed: false,
    };
    setToDOList((prev) => {
      return [...prev, newTaskItem];
    });
    setNewTask(" ");
  };
  const handleDelete = (e, id) => {
    const newArray = toDoList;
    const modify = newArray.filter((ele) => ele.id != id);
    setToDOList(modify);
  };

  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "100vh",
          border: "2px solid black",
          margin: "auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>TO DO List </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Array(rows)
            .fill("0")
            .map((ele, index) => {
              return (
                <div>
                  <p>{index}</p>
                </div>
              );
            })}
        </div>
        <div
          style={{
            margin: "auto",
            width: "100%",
            // border: "2px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <form onSubmit={(e) => addItem(e)}>
            <input
              style={{
                padding: "10px",
                borderRadius: "10px",
                fontSize: "18px",
              }}
              value={newTask}
              onChange={(e) => handleChange(e)}
            />
            <button
              style={{
                padding: "10px",
                borderRadius: "3px",
                background: "green",
                color: "white",
                boxShadow: "1px 2px 2px 2px green",
              }}
              type="submit"
            >
              ADD
            </button>
          </form>
        </div>
        <div
          style={{
            width: "90%",
            border: "1px dotted green",
            margin: "auto",
            height: "80%",
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          {toDoList.slice(startIndex, limit).map((ele, index) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "18px",
                  }}
                >
                  <span>{index + 1}.</span> <span>{ele.task}</span>{" "}
                  <button onClick={(e) => handleDelete(e, ele.id)}>
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
