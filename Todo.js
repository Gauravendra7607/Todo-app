import React, { useState } from "react";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(-1);
  const [editfield, seteditField] = useState("");
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
       setInputData(" ");
    }
  };
  const deleteItem = (id) => {
    // console.log(id);
    const updateitems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updateitems);
  };
  const removeItem = () => {
    setItems([]);
  };
  const changeItem = (ind) => {
    setcurrentIndex(ind);
  };
  const saveItem = (ind) => {
    if (editfield) {
      var clonedArray = JSON.parse(JSON.stringify(items));

      clonedArray.splice(ind, 1, editfield);
      setItems(clonedArray);
      seteditField("");
      setcurrentIndex(-1);
    }
  };
  return (
    <div className="demo">
      <div className="main-div">
        <div className="center-div">
          <h1> Todo app</h1>
          <figure>
            <figcaption> Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="write items"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            ></input>

            <button onClick={addItem}>+</button>
          </div>
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>
                    
                    {elem}
                    {currentIndex === ind && (
                      <>
                        <input onChange={(e) => seteditField(e.target.value)} />{" "}
                        <button onClick={() => saveItem(ind)}> save</button>
                      </>
                    )}
                    <button onClick={() => deleteItem(ind)}>delete</button>{" "}
                    <button onClick={() => changeItem(ind)}> Edit</button>
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className=" " onClick={removeItem}>
              {" "}
              REMOVE ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
