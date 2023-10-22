import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/Index";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.TodoReducer.list);
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center  vh-100">
        <div className="main-div">
          <div className="child-div">
            <div className="  d-flex justify-content-center ">
              <img
                style={{ width: "100px", height: "200px" }}
                src="./images/todo.svg"
              />
            </div>

            <h2 className="mb-5">Add your items here ✌</h2>
            <div className="input-div d-flex mb-3">
              <input
                className="form-control"
                type="text"
                value={inputData}
                placeholder="✍  Add your items"
                onChange={(e) => setInputData(e.target.value)}
              />

              <button
                className="ms-3 btn btn-primary"
                style={{
                  padding: "5px 10px",
                  color: "black",
                  backgroundColor: "transparent",
                  border: "1px solid black",
                }}
                onClick={() => dispatch(addTodo(inputData), setInputData(""))}
              >
                <i className="bi bi-plus-square"></i>
              </button>
            </div>
            <div className="showData ">
              {list.map((val) => {
                const { id, data } = val;
                return (
                  <div
                    className="list-items mt-2  p-3  d-flex"
                    style={{ border: "1px solid black", borderRadius: "18px" }}
                    key={id}
                  >
                    <h4>{data}</h4>
                    <div className="icons d-flex justify-content-end  w-100">
                      <button
                        className="btn "
                        style={{
                          padding: "5px 10px",
                          color: "black",
                          backgroundColor: "transparent",
                          border: "1px solid black",
                        }}
                        onClick={() => dispatch(deleteTodo(id))}
                      >
                        <i class="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="lastbtn mt-5 d-flex justify-content-center">
              <button
                data-sm-link-text="Remove All"
                className="btn effect04"
                onClick={() => dispatch(removeTodo())}
              >
                <span>Check-List</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
