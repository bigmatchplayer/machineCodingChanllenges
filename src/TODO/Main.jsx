import React, { useEffect, useState } from "react";

const Main = () => {
  const [toDoList, setToDOList] = useState([
    {
      id: "1",
      task: "newTask1",
      completed: false,
    },
    {
      id: "2",
      task: "newTask2",
      completed: false,
    },
    {
      id: "3",
      task: "newTas3",
      completed: false,
    },
    {
      id: "5",
      task: "newTask4",
      completed: false,
    },
    {
      id: "32",
      task: "newTask5",
      completed: false,
    },
    {
      id: "98",
      task: "newTask6",
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState("");
  const [page, setPages] = useState([1, 2, 3]);
  const [startIndex, setStartIndex] = useState(0);
  const [totalData, setTotalData] = useState(0);
  const [completed, setCompleted] = useState([]);
  const limit = 5;
  const [rows, setRows] = useState(0);
  useEffect(() => {
    const total = toDoList.length;
    setTotalData(total);
    setRows(Math.ceil(total / limit));
  }, [toDoList]);

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
  const handleChecked = (e, id) => {
    const newArray = [...completed, id];
    setCompleted(newArray);
  };
  const handlePageChange = (index) => {
    setStartIndex(index * limit);
  };

  console.log("startIndex", startIndex);
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
                <div onClick={() => handlePageChange(index)}>
                  <p
                    style={{
                      border: "1px solid black",
                      padding: "4px",
                      marginRight: "4px",
                      cursor: "pointer",
                    }}
                  >
                    {index + 1}
                  </p>
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
          {toDoList.slice(startIndex, startIndex + limit).map((ele, index) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "18px",
                    marginBottom: "8px",
                  }}
                >
                  <span>{index + 1}.</span>
                  <input
                    type="checkbox"
                    checked={completed.includes(ele.id)}
                    onChange={(e) => handleChecked(e, ele.id)}
                  />
                  <span
                    style={
                      completed.includes(ele.id)
                        ? { textDecoration: "line-through" }
                        : {}
                    }
                  >
                    {ele.task}
                  </span>{" "}
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
