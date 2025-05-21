import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Footer from "./Footer.jsx";

export const Content = () => {
  let [items, setItems] = useState([]);

  let [inItem, setInItem] = useState("");
  let [isEditing, setIsediting] = useState(false);
  let [curEditID, setCureditID] = useState(null);

  function handleChange(id) {
    let newItem = items.map((item) => {
      return item.id === id ? { ...item, Checked: !item.Checked } : item;
    });
    setItems(newItem);
  }

  function handleDelete(id) {
    setItems(
      items
        .filter((item) => {
          return item.id !== id;
        })
        .map((item, index) => {
          return { ...item, id: index + 1 };
        })
    );
  }

  function handleAdd() {
    if (isEditing) {
      setItems(
        items.map((item) => {
          return item.id === curEditID ? { ...item, label: inItem } : item;
        })
      );
      setCureditID(null);
      setInItem("");
      setIsediting(false);
      return;
    }
    setItems([
      ...items,
      { id: items.length + 1, label: inItem, Checked: false },
    ]);
    setInItem("");
  }

  function handleUpdate(id) {
    setIsediting(true);
    setCureditID(id);
    let newItem = items.find((item) => item.id === id);
    console.log(newItem);
    setInItem(newItem.label);
  }
  return (
    <main>
      <div className="container">
        <input
          type="text"
          value={inItem}
          onChange={(e) => {
            setInItem(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <button style={{ padding: "7px" }} onClick={handleAdd}>
          {isEditing ? "SAVE" : "ADD"}
        </button>

        <ul>
          {items.map((item) => {
            return (
              <li
                style={{ listStyle: "none" }}
                key={item.id}
                className="mylist"
              >
                <input
                  className="checkBox"
                  type="checkbox"
                  checked={item.Checked}
                  onChange={() => handleChange(item.id)}
                />
                <label>{item.label}</label>
                <FaRegEdit
                  className="editButton"
                  onClick={() => handleUpdate(item.id)}
                />
                <MdDelete
                  className="delButton"
                  tabIndex={0}
                  onClick={() => handleDelete(item.id)}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <Footer></Footer>
    </main>
  );
};
