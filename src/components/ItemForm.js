import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  //const [formInput, setFormInput] = useState({name: "", category: ""})
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target)
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }

    onItemFormSubmit(newItem)
  }

  function handleItemName(e) {
    setItemName(e.target.value)
  }

  function handleItemCategory(e) {
    setItemCategory(e.target.value)
  }

  return (
    <form 
      className="NewItem"
      onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
